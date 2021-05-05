// import React, { Component } from "react";
// import Modal from "../depo/modal/Modal";

// class List2 extends Component {
//   constructor(props) {
//     super(props);

//     this.replaceModalItem = this.replaceModalItem.bind(this);
//     this.saveModalDetails = this.saveModalDetails.bind(this);
//     this.state = {
//       requiredItem: 0,
//       brochure: [
//         {
//           urunadi: "IBM M3 ANAKART",
//           aciklama: " açıklama",
//           kategori: "Bilgisayar",
//           depo: "İstanbul",
//         },
//         {
//           urunadi: "KDV YUZDE 18 URUN",
//           aciklama: " açıklama",
//           kategori: "Hizmet",
//           depo: "İSTANBUL",
//         },
//         {
//           urunadi: "KDV YUZDE 18 URUN",
//           aciklama: "açıklama ",
//           kategori: "Hizmet",
//           depo: "İstanbul",
//         },

// {
//   title: "ANKARA",
//   msg: "ANKARA DEPO",
//   aciklama: "ankara",
//   islem: "islem",
// },

// {
//   title: "İSTANBUL",
//   msg: "İSTANBUL DEPO",
//   aciklama: "bilgisayar",
//   islem: "islem",
// },
//     ],
//   };
// }

//   replaceModalItem(index) {
//     this.setState({
//       requiredItem: index,
//     });
//   }

//   saveModalDetails(item) {
//     const requiredItem = this.state.requiredItem;
//     let tempbrochure = this.state.brochure;
//     tempbrochure[requiredItem] = item;
//     this.setState({ brochure: tempbrochure });
//   }

//   deleteItem(index) {
//     let tempBrochure = this.state.brochure;
//     tempBrochure.splice(index, 1);
//     this.setState({ brochure: tempBrochure });
//   }

//   render() {
//     const brochure = this.state.brochure.map((item, index) => {
//       return (
//         <tr key={index}>
//           <td>{item.urunadi}</td>
//           <td>{item.aciklama}</td>
//           <td>{item.kategori}</td>
//           <td>{item.depo}</td>

//           {/* <td>
//             <button
//               className="btn btn-primary"
//               data-toggle="modal"
//               data-target="#exampleModal"
//               onClick={() => this.replaceModalItem(index)}
//             >
//               Düzenle
//             </button>{" "}
//             <button
//               className="btn btn-danger"
//               onClick={() => this.deleteItem(index)}
//             >
//               Kaldır
//             </button>
//           </td> */}
//         </tr>
//       );
//     });

//     const requiredItem = this.state.requiredItem;
//     let modalData = this.state.brochure[requiredItem];
//     return (
//       <div>
//         <table className="table table-striped">
//           <tbody>{brochure}</tbody>
//         </table>
//         <Modal
//           title={modalData.urunadi}
//           msg={modalData.aciklama}
//           aciklama={modalData.kategori}
//           islem={modalData.depo}
//           saveModalDetails={this.saveModalDetails}
//         />
//       </div>
//     );
//   }
// }

// export default List2;
