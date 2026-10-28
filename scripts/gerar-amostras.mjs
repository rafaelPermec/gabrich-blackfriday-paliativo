// Gera as páginas de amostra do e-book para o folheador.
// O PDF fica em privado/ (fora do git e fora de public/). Só as imagens geradas vão para o site.
//
// Requer: poppler (pdftoppm) instalado na máquina · npm i (sharp)
// Uso: npm run amostras -- privado/antes-da-foto.pdf 1,3,7,12,18
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import sharp from 'sharp';

const [pdf, lista] = process.argv.slice(2);
if (!pdf || !lista) {
  console.error('uso: npm run amostras -- <arquivo.pdf> <páginas separadas por vírgula>');
  process.exit(1);
}

const paginas = lista.split(',').map((n) => Number(n.trim())).filter(Boolean);
const saida = 'public/amostras/antes-da-foto';
const LARGURA = 900; // suficiente para ler na tela, ruim para imprimir
const MARCA = 'amostra · deboragabrich.com';

mkdirSync(saida, { recursive: true });
const tmp = mkdtempSync(join(tmpdir(), 'amostras-'));

try {
  for (const [i, p] of paginas.entries()) {
    execFileSync('pdftoppm', ['-f', String(p), '-l', String(p), '-r', '110', '-png', pdf, join(tmp, 'p')]);
    const arquivo = readdirSync(tmp).find((f) => f.endsWith('.png'));
    const { data, info } = await sharp(join(tmp, arquivo))
      .resize({ width: LARGURA, withoutEnlargement: true })
      .toBuffer({ resolveWithObject: true });
    const { width, height } = info;
    const marca = Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <text x="50%" y="${height - 24}" text-anchor="middle" font-family="monospace" font-size="14" fill="#000" fill-opacity="0.35" letter-spacing="2">${MARCA}</text>
        <text x="50%" y="50%" text-anchor="middle" font-family="monospace" font-size="44" fill="#000" fill-opacity="0.06" transform="rotate(-30 ${width / 2} ${height / 2})">${MARCA}</text>
      </svg>`,
    );
    const nome = `pagina-${String(i + 1).padStart(2, '0')}.webp`;
    await sharp(data).composite([{ input: marca }]).webp({ quality: 72 }).toFile(join(saida, nome));
    rmSync(join(tmp, arquivo));
    console.log(`página ${p} → ${saida}/${nome} (${width}×${height})`);
  }
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
