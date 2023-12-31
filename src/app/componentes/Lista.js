'use client'
import Image from "next/image";
import { useState } from "react";
import CrearItem from "./CrearItem"
import InputArea from "./InputArea"
import Footer from "./Footer"


import { useMotionValue, useTransform, motion } from "framer-motion"

function App() {

  const [items, setItems] = useState([]);

  function añadirItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function borrarItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [100, -100], [-30, 30]);


  return (

    <section>
      <div className="p">
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 10 }}
          drag
          dragElastic={0.18}
          dragConstraints={{
            top: 0,
            left: -10,
            right: 10,
            bottom: 0,
          }}
          whileTop={{ cursor: "grabbing" }}
          className="container-fluid">

          <div
            className="titulo">
            <h1>Lista 3D</h1>
          </div>
          <InputArea onAdd={añadirItem} />

          <motion.div
            style={{ x, y, rotateX, rotateY, z: 100 }}

            className="items">
            <ul>
              {items.map((crearItem, index) => (
                <CrearItem
                  key={index}
                  id={index}
                  text={crearItem}
                  onChecked={borrarItem}
                />
              ))}
            </ul>
          </motion.div>

          <div className="cartel1">

            <motion.div
              style={{ x, y, rotateX, rotateY, z: 1000 }}
            >
              <Image className="astronauta"
                src="/imagenes/astronauta.png"
                width={250}
                height={250}
                priority={true}
                draggable="false"
                alt="imagen de astronauta"></Image>
            </motion.div>

          </div>
        </motion.div>

        <Footer />
      </div>
    </section>
  );
}

export default App;