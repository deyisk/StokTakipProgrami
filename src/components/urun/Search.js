import React from "react";
import { MDBDataTable } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const Search = () => {
  const data = {
    columns: [
      {
        label: "Ürün Adı",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Açıklama",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "Kategori",
        field: "office",
        sort: "asc",
        width: 200,
      },
      {
        label: "Depo",
        field: "age",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        name: "televizyon",
        position: "",
        office: "abc",
        age: "muğla",
      },
      {
        name: "KDV yuzde 18 urun",
        position: "",
        office: "Hizmet",
        age: "İzmir",
      },
      {
        name: "KDV yuzde 18 urun",
        position: "",
        office: "Hizmet",
        age: "İzmir",
      },
      {
        name: "KDV yuzde 18 urun",
        position: "",
        office: "Hizmet",
        age: "İzmir",
      },
      {
        name: "IBM M3 ANAKART",
        position: "",
        office: "Bilgisayar",
        age: "İstanbul",
      },
      {
        name: "IBM M3 ANAKART",
        position: "",
        office: "Bilgisayar",
        age: "İstanbul",
      },
      {
        name: "IBM M3 ANAKART",
        position: "",
        office: "Bilgisayar",
        age: "İstanbul",
      },
      {
        name: "IBM M3 ANAKART",
        position: "",
        office: "Bilgisayar",
        age: "İstanbul",
      },
      {
        name: "IBM M3 ANAKART",
        position: "",
        office: "Bilgisayar",
        age: "İstanbul",
      },
      {
        name: "IBM M3 ANAKART",
        position: "",
        office: "Bilgisayar",
        age: "İstanbul",
      },

      {
        name: "KDV yuzde 18 urun",
        position: "",
        office: "Hizmet",
        age: "İzmir",
      },
      {
        name: "KDV yuzde 18 urun",
        position: "",
        office: "Hizmet",
        age: "İzmir",
      },
      {
        name: "KDV yuzde 18 urun",
        position: "",
        office: "Hizmet",
        age: "İzmir",
      },
      {
        name: "KDV yuzde 18 urun",
        position: "",
        office: "Hizmet",
        age: "İzmir",
      },
      {
        name: "KDV yuzde 18 urun",
        position: "",
        office: "Hizmet",
        age: "İzmir",
      },
    ],
  };

  return <MDBDataTable striped bordered small data={data} />;
};

export default Search;
