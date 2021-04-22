// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import "./Table.css";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function createData(ad, adres, aciklama, islem) {
//   return { ad, adres, aciklama, islem };
// }

// const rows = [
//   createData("Hizmet Deposu", "İstanbul", "İstanbul Depo"),
//   createData("Bilgisayar Donanım", "İstanbul", "İstanbul Depo"),
// ];

// export default function BasicTable() {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell id="depoadi">Depo Adı</TableCell>
//             <TableCell align="right">Adres</TableCell>
//             <TableCell align="right">Açıklama</TableCell>
//             <TableCell align="right">İşlemler</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.ad}>
//               <TableCell component="th" scope="row">
//                 {row.ad}
//               </TableCell>
//               <TableCell align="right">{row.adres}</TableCell>
//               <TableCell align="right">{row.aciklama}</TableCell>
//               <TableCell align="right">
//                 {row.islem}
//                 {/* <div className="button">buton</div> */}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// // <div className={`sidebar__link ${
// //   activePage === "stok" ? "active_menu_link" : ""}`}>
