"use client";

import { useEffect, useState } from "react";
import pro from "../../data/pro.json";

import { Conte } from "./styles";
import { Off } from "@/app/produtos/styles";

import Link from "next/link";
import Image from "next/image";

export default function ItensCard() {
  const [produtos, setProdutos] = useState(() => pro.slice(0, 10));

  useEffect(() => {
    const produtosAleatorios = [...pro]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    setProdutos(produtosAleatorios);
  }, []);

  return (
    <Conte>
      <div className="section">
        <div className="sec">
          <h1>Demais peças</h1>

          <div className="containerCard">
            {produtos.map((item) => (
              <Link
                key={item.id}
                href={`/produtos/${item.id}`}
              >
                <div className="card">
                  <Off className="btd">
                    20% off
                  </Off>
                  <div className="ft">
                    <Image
                      src={item.photo}
                      alt={item.name}
                      sizes="100vh"
                      width={180}
                      height={210}
                      style={{
                        borderRadius: "8px",
                        marginTop: "4px",
                      }}
                    />
                  </div>

                  <div className="info">
                    <h1>{item.name}</h1>

                    <div
                      className="nis"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>
                        R$ {item.price}
                      </p>

                      <span className="var">
                        R${" "}
                        {Math.floor(
                          item.price * item.des + item.price
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Conte>
  );
}