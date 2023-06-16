import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [cursoSelecionado, setCursoSelecionado] = useState('');
  const [disciplinaFiltrada, setDisciplinaFiltrada] = useState(null);
  const [opcaoBusca, setOpcaoBusca] = useState('');

  const cursos = [
    { id: 1, nome: 'Sistemas de Informação' },
    { id: 2, nome: 'Engenharia Elétrica' },
  ];

  const disciplinas = {
    'sistemas de informação': [
      'Projeto de Extensão Interdisciplinar',
      'Introdução a Sistemas de Informação',
      'Contabilidade Introdutória',
      'Noções de Direito',
    ],
    'engenharia elétrica': [
      'Física Aplicada à Engenharia I',
      'Projeto de Extensão Interdisciplinar',
      'Química',
      'Cálculo Diferencial e Integral I',
      'Geometria Analítica e Álgebra Linear',
      'Algoritmos I',
      'Introdução à Engenharia',
    ],
  };

  const cronograma = [
    {
      id: 1,
      horario: '08:00 - 10:00',
      sala: '104, Bloco 07',
      disciplina: 'Projeto de Extensão Interdisciplinar',
      professor: 'Waleska',
      dataProva: 'N/A',
      dataTrabalho: 'Envio   do banner: 16/06 Apresentação: 27/06',
    },
    {
      id: 2,
      horario: '10:20 - 11:20',
      sala: '104, Bloco 01',
      disciplina: 'Introdução a Sistemas de Informação',
      professor: 'Marcelo',
      dataProva: '04/07',
      dataTrabalho: '20/07',
    },
    {
      id: 3,
      horario: '08:00 - 11:20',
      sala: '202, Bloco 07',
      disciplina: 'Contabilidade Introdutória',
      professor: 'Ferron',
      dataProva: '21/07',
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

  const cronograma2 = [
    {
      id: 1,
      horario: '08:00 - 12:20',
      sala: '104, Bloco 07',
      disciplina: 'Física Aplicada à Engenharia I',
      professor: 'Marllon',
      dataProva: '03/07',
      dataTrabalho: 'Ajustar',
    },
    {
      id: 2,
      horario: '08:00 - 10:00',
      sala: '104, Bloco 07',
      disciplina: 'Projeto de Extensão Interdisciplinar',
      professor: 'Waleska',
      dataProva: 'N/A',
      dataTrabalho: 'Envio do banner: 16/06 Apresentação: 27/06',
    },
    {
      id: 3,
      horario: '10:20 - 11:50',
      sala: '104, Bloco 07',
      disciplina: 'Química',
      professor: 'Vinicius',
      dataProva: '04/07',
      dataTrabalho: 'Ajustar',
    },
    {
      id: 4,
      horario: '08:00 - 12:20',
      sala: '104, Bloco 07',
      disciplina: 'Cálculo Diferencial e Integral I',
      professor: 'Adan',
      dataProva: '05/07',
      dataTrabalho: '21/06',
    },
    {
      id: 5,
      horario: '08:00 - 10:00',
      sala: '104, Bloco 07',
      disciplina: 'Geometria Analítica e Álgebra Linear',
      professor: 'Vinicius',
      dataProva: '06/07',
      dataTrabalho: '22/06',
    },
    {
      id: 6,
      horario: '09:00 - 11:20',
      sala: '104, Bloco 07',
      disciplina: 'Algoritmos I',
      professor: 'Matheus',
      dataProva: '07/07',
      dataTrabalho: 'Ajustar',
    },
    {
      id: 7,
      horario: '11:20 - 12:20',
      sala: '104, Bloco 07',
      disciplina: 'Introdução à Engenharia',
      professor: 'Guilherme',
      dataProva: '07/07',
      dataTrabalho: 'Todas as Sextas-feiras',
    }
  ];

  const handleCursoChange = (event) => {
    const cursoSelecionado = event.target.value;
    setCursoSelecionado(cursoSelecionado);
    setDisciplinaFiltrada(null);
    setOpcaoBusca('');
  };

  const handleOpcaoBuscaChange = (event) => {
    const opcaoBusca = event.target.value;
    setOpcaoBusca(opcaoBusca);
    setDisciplinaFiltrada(null);

  };


  const handleBuscarClick = () => {
    let filteredDisciplinas;
    if (opcaoBusca === '') {
      filteredDisciplinas = filtrarDisciplinas();
    } else {
      filteredDisciplinas = filtrarDisciplinas().filter(
        (item) => item.disciplina.toLowerCase() === opcaoBusca.toLowerCase()
      );
    }

    setDisciplinaFiltrada(filteredDisciplinas);

  };


  const filtrarDisciplinas = () => {
    if (opcaoBusca === '') {
      return cronograma.filter((item) =>
        item.disciplina.toLowerCase() === opcaoBusca.toLowerCase()
      );
    }

    if (cursoSelecionado.toLowerCase() === 'sistemas de informação') {
      return cronograma.filter((item) =>
        disciplinas[cursoSelecionado.toLowerCase()].includes(item.disciplina)
      );
    }

    if (cursoSelecionado.toLowerCase() === 'engenharia elétrica') {
      return cronograma2.filter((item) =>
        disciplinas[cursoSelecionado.toLowerCase()].includes(item.disciplina)
      );
    }
    return [];
  };



  return (
    <div className='cont-main'>

      <h1>Cronograma Acadêmico</h1>

      <div className='container'>
        <div className='cont-curso'>
          <label>Selecione o curso:</label>        
            <select value={cursoSelecionado} onChange={handleCursoChange}>
              <option value="">Selecione</option>
              {cursos.map((curso) => (
                <option key={curso.id} value={curso.nome}>
                  {curso.nome}
                </option>

              ))}
            </select>
        </div>

        {cursoSelecionado && (
          <div >
            <label className='l'>Selecione a disciplina:</label>

            <select value={opcaoBusca} onChange={handleOpcaoBuscaChange}>
              <option value="">Selecione</option>
              {disciplinas[cursoSelecionado.toLowerCase()].map((disciplina) => (
                <option key={disciplina} value={disciplina}>
                  {disciplina}
                </option>
              ))}
            </select>
          </div>

        )}
        <button className='btbusca' onClick={handleBuscarClick}>Buscar</button>
      </div>

      {disciplinaFiltrada && (
        <div>
          <h2>Disciplinas encontradas:</h2>
          {disciplinaFiltrada.map((item) => (
            <table className='table'>

              <tr className='thead'>
                <th className='th' scope="col">Horário</th>
                <th className='th' scope="col">Sala</th>
                <th className='th' scope="col">Professor</th>
                <th className='th' scope="col">Data da Prova</th>
                <th className='th' scope="col">Data do Trabalho</th>
              </tr>

              <tr className='trow' key={item.id}>
                <td className='td'>{item.horario}</td>
                <td className='td'>{item.sala}</td>
                <td className='td'>{item.professor}</td>
                <td className='td'>{item.dataProva}</td>
                <td className='td'>{item.dataTrabalho}</td>
              </tr>

            </table>
          ))}
         
        </div>
      )}



    </div>
  );
};

export default App;
