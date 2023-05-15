import React from 'react';
import style from './App.css'

function App() {
  const cronograma = [
    {
      id: 1,
      horario: '08:00 - 10:00',
      sala: '202, Bloco 07',
      disciplina: 'Projeto de Extensão Interdisciplinar',
      professor: 'Waleska',
      dataProva: 'N/A',
      dataTrabalho: 'Ajustar'
    },
    {
      id: 2,
      horario: '10:00 - 11:20',
      sala: '104, Bloco 01',
      disciplina: 'Introdução a Sistemas de Informação',
      professor: 'Marcelo',
      dataProva: 'Ajustar',
      dataTrabalho: 'Ajustar'
    },
    {
      id: 3,
      horario: '08:00 - 11:20',
      sala: '202, Bloco 07',
      disciplina: 'Contabilidade Introdutória',
      professor: 'Ferron',
      dataProva: 'Ajustar',
      dataTrabalho: 'Ajustar'
    },
    {
      id: 4,
      horario: '08:00 - 11:20',
      sala: '204, Bloco 07',
      disciplina: 'Noções de Direito',
      professor: 'Thiara',
      dataProva: 'Ajustar',
      dataTrabalho: 'Ajustar'
    },
    // Adicione mais objetos cronograma conforme necessário
  ];

  return (
    <div className="App">
      <div class="card">
  <div className="card-body">
      <h1 className='h1'> Cronograma</h1>
      <table class="table">
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
          {cronograma.map(item => (
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
      </div>
</div>
    </div>
  );
}

export default App;
