// import Cors from 'cors';

// // Initialize CORS middleware
// const cors = Cors({
//   methods: ['GET', 'HEAD', 'POST', 'OPTIONS'],
//   origin: 'https://blog-viewer-livid.vercel.app', // Allow only your frontend domain
// });
// export default function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result);
//       }
//       return resolve(result);
//     });
//   });
// }