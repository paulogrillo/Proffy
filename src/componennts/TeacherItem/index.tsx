import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem (){
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/53320819?s=460&u=f2ffa5ed5ad3fb828cc4e75615d467b08eaadd71&v=4" alt="Paulo Grillo"/>
            <div>
                <strong>Paulo Grillo</strong>
                <span>Developer</span>
            </div>
        </header>
        <p>
            Lorem ipsum dolor sit amet, est te vidit errem ceteros.
            <br/>  <br/>Id est munere dolorum, mel ea tritani definitionem. Platonem euripidis vituperatoribus ne usu, mundi molestie indoctum eos cu, viris munere interpretaris in vis. Vituperata reprimique est ad. Vim ut omnes reprehendunt conclusionemque, cu usu perfecto voluptatum.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 40,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;