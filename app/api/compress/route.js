import ffmpeg from 'fluent-ffmpeg';
import path from 'path';

ffmpeg.setFfmpegPath(
  'C:/Users/rs987/AppData/Local/Microsoft/WinGet/Links/ffmpeg.exe'
);

export async function GET() {

  const inputPath = path.join(
    process.cwd(),
    'public/video/hero-bg.mp4'
  );

  const outputPath = path.join(
    process.cwd(),
    'public/video/output.mp4'
  );

  return new Promise((resolve) => {

    ffmpeg(inputPath)
      .output(outputPath)
      .videoCodec('libx264')
      .outputOptions('-crf 28')

      .on('start', (cmd) => {
        console.log(cmd);
      })

      .on('end', () => {

        resolve(
          Response.json({
            success: true,
            output: '/video/output.mp4'
          })
        );

      })

      .on('error', (err) => {

        console.log(err);

        resolve(
          Response.json({
            success: false,
            error: err.message
          })
        );

      })

      .run();

  });

}