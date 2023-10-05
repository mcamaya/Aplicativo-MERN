import Factura from "../models/Factura.js";
import { httpErrors } from "../helpers/handleErrors.js";
import db from "../database/mongoClient.js";
const facturasCollection = db.collection("facturas");

export const getFacturas = async (req, res) => {
  try {
    await facturasCollection.aggregate([
      {
        $project: {
          _id: 1,
          total: {
            $sum: {
              $map: {
                input: "$productosIds",
                as: "prd",
                in: { $multiply: ["$$prd.precio", "$$prd.cantidad"] },
              },
            },
          },
        },
      },
      {
        $group: {
          _id: "$_id",
          totalVenta: { $sum: "$total" },
        },
      },
      { $merge: { into: "facturas", whenMatched: "merge" } },
    ]);

    const facturasDB = await Factura.find().populate("clienteId", "nombre");

    res.status(200).json(facturasDB);
  } catch (err) {
    httpErrors(res, err);
  }
};

export const getFacturaByID = async (req, res) => {
  try {
    const facturaDB = await Factura.findOne({ _id: req.params.id });
    res.status(200).json(facturaDB);
  } catch (err) {
    httpErrors(res, err);
  }
};

export const postNewFactura = async (req, res) => {
  try {
    const {
      numeroFactura,
      clienteId,
      productosIds,
      fecha,
      iva,
      descuento,
      impuestoAdicional,
    } = req.body;
    const newFactura = new Factura({
      numeroFactura,
      clienteId,
      productosIds,
      fecha,
      iva,
      descuento,
      impuestoAdicional,
    });
    await newFactura.save();
    res.status(200).json(newFactura);
  } catch (err) {
    httpErrors(res, err);
  }
};
