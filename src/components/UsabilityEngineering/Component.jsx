import React from "react";
import './Component.css'

const FrequentQuestions = () => {
    return (
        <section className="content">
            <div className="scroll">
                <h3 className="title">
                    Ingeniería de usabilidad
                </h3>
                <p className="paragraph">
                    Un conjunto de conceptos y técnicas para planificar, implementar y probar los objetivos de usabilidad de un sistema. [Rosson y Carroll, 2002] intentan capturar con precisión los criterios utilizados para juzgar la usabilidad de un producto.
                    Introducir medidas de usabilidad en todas las etapas de desarrollo.
                    Problema: Definir métricas que dependen de acciones de usuarios muy específicas en circunstancias muy específicas.
                    Problema: proporcionar un medio para cumplir con las especificaciones de usabilidad, no necesariamente la usabilidad real.
                </p>
            </div>
        </section>
    );
};

export default FrequentQuestions;



