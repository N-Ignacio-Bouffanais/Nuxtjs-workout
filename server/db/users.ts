import { prisma } from "./prisma";
import argon2d  from "argon2";

export const createUser = (userData) =>{
  const finalUserData = {
    ...userData,
    password: argon2d.hash(userData.password)
  }

  return prisma.user.create({
    data: finalUserData
})
}