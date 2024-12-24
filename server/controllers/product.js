import { Prisma } from "@prisma/client/extension";
import prisma from "../prisma/prisma.js";

export const create = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = await prisma.product.create({
      data: {
        name: name,
        price: price,
      },
    });
    res.send(newProduct).status(200);
  } catch (error) {
    console.log(error);
    res.send("server error").status(500);
  }
};

export const list = async (req, res) => {
  try {
    const listProduct = await prisma.product.findMany();
    res.send(listProduct).status(200);
  } catch (error) {
    console.log(error);
    res.send("server error").status(500);
  }
};

export const read = async (req, res) => {
  try {
    const { id } = req.params;
    const readProduct = await prisma.product.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    res.send(readProduct).status(200);
  } catch (error) {
    console.log(error);
    res.send("server error").status(500);
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;
    const updateProduct = await prisma.product.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: name,
        price: price,
      },
    });
    res.send(updateProduct).status(200);
  } catch (error) {
    console.log(error);
    res.send("server error").status(500);
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const removeProduct = await prisma.product.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.send(removeProduct).status(200);
  } catch (error) {
    console.log(error);
    res.send("server error").status(500);
  }
};
