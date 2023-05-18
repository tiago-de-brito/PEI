import { useState } from "react";

const Slc = ({addSlc}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addSlc(value, category);
        setValue("");
        setCategory("");
    };

  return (
    <div className='disciplinas'>
        <form onSubmit = {handleSubmit}>
        
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option disable selected value="1">Selecione uma disciplina</option>
                <option value="PEI">Projeto de Extensão Disciplinar</option>
                <option value="CI">Contabilidade Introdutória</option>
                <option value="ISI">Introdução a Sistemas de Informação</option>
                <option value="ND">Noções de Direito</option>
            </select>

            
            <button type="button" className="button">Buscar</button>
        </form>
    </div>
  )
}

export default Slc