export {};

// declare global {
//   interface Window {
//     Telegram: {
//       WebApp: {
//         initDataUnsafe: {
//           user?: {
//             user_id : BigInteger;
//             user_name :string;
//             first_name: string;
//             last_name : string;
//             // Add other user properties as needed
//           };
//         };
//       };
//     };
//   }
// }

declare global {
  interface Window {
    Telegram: any;
  }
}
