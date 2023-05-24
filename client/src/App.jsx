import React, { useState } from 'react';
import './App.css';


function App() {
  const [disciplinaFiltrada, setDisciplinaFiltrada] = useState(null);
  const [opcaoBusca, setOpcaoBusca] = useState('');

  const filtrarCronograma = (disciplina) => {
    setDisciplinaFiltrada(disciplina);
  };

  const handleOpcaoBuscaChange = (e) => {
    setOpcaoBusca(e.target.value);
    setDisciplinaFiltrada(null);
  };

  const cronograma = [
    {
      id: 1,
      horario: '08:00 - 10:00',
      sala: '202, Bloco 07',
      disciplina: 'Projeto de Extensão Interdisciplinar',
      professor: 'Waleska',
      dataProva: 'N/A',
      dataTrabalho: 'Ajustar',
    },
    {
      id: 2,
      horario: '10:00 - 11:20',
      sala: '104, Bloco 01',
      disciplina: 'Introdução a Sistemas de Informação',
      professor: 'Marcelo',
      dataProva: 'Ajustar',
      dataTrabalho: 'Ajustar',
    },
    {
      id: 3,
      horario: '08:00 - 11:20',
      sala: '202, Bloco 07',
      disciplina: 'Contabilidade Introdutória',
      professor: 'Ferron',
      dataProva: 'Ajustar',
      dataTrabalho: 'Ajustar',
    },
    {
      id: 4,
      horario: '08:00 - 11:20',
      sala: '204, Bloco 07',
      disciplina: 'Noções de Direito',
      professor: 'Thiara',
      dataProva: 'Ajustar',
      dataTrabalho: 'Ajustar',
    },
    // Adicione mais objetos cronograma conforme necessário
  ];

  const opcoesBusca = cronograma.map((item) => item.disciplina);


  return (   
        <div className="card-body">
          <h1 className="h1">Cronograma</h1>
          <div className="busca">
            <select value={opcaoBusca}
             className='select' onChange={handleOpcaoBuscaChange}>
              <option value="">Selecione uma opção</option>
              {opcoesBusca.map((opcao) => (
                <option key={opcao} value={opcao}>
                  {opcao}
                </option>
              ))}
            </select>

            <button
              type="button" className='button'
              disabled={!opcaoBusca}
              onClick={() => {
                filtrarCronograma(opcaoBusca);
              }}
            >
              Buscar
            </button>
          </div>

          {disciplinaFiltrada && (
            <>
              <table className="table">
                <thead class="table-dark">
                  <tr>
                    <th>Horário</th>
                    <th>Sala</th>
                    <th>Disciplina</th>
                    <th>Professor</th>
                    <th>Data da Prova</th>
                    <th>Data do Trabalho</th>
                  </tr>
                </thead>
                <tbody>
                  {cronograma
                    .filter((item) => item.disciplina === disciplinaFiltrada)
                    .map((item) => (
                      <tr key={item.id}>
                        <td>{item.horario}</td>
                        <td>{item.sala}</td>
                        <td>{item.disciplina}</td>
                        <td>{item.professor}</td>
                        <td>{item.dataProva}</td>
                        <td>{item.dataTrabalho}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </>
          )}
        </div>      
  );
}

export default App;
