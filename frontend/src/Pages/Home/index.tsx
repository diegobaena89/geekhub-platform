import React from "react";
import Header from "../../components/Header";
import background from "../../assets/background.svg"
import Gameboy from "../components/Gameboy";


function Home() {
    return (
        <section
            className="h-screen relative mx-auto max-w-screen-lg px-4 md:px-0 bg-contain bg-no-repeat bg-right z-10"
            style={{
                backgroundImage: `url(${background})`
            }}>
            <Header />
            <article
                className="text-left h-200 ml-11 absolute"
                style={{ bottom: '10rem' }}
            >
                <h1 className="text-custom-gray max-w-md overflow-x-hidden"
                    style={{ fontSize: '1.1rem' }}
                >
                    Somos uma plataforma<br />
                    que conecta colecionadores<br />
                    em busca de outros colecionadores.
                </h1>
                <div className="flex ml-10 mt-8">
                    <button className="text-white bg-custom-green px-6 py-1 rounded-xl mr-4">
                        SignUp
                    </button>
                    <button className="text-custom-green bg-white px-6 py-1 rounded-xl mr-4 border border-custom-green">
                        SignUp
                    </button>
                </div>
            </article>
            <Gameboy />
        </section>
    )
}

export default Home;