import './App.css'

function App() {

  return (
    <>
          <table width={1200} >
            <thead class="bg-emerald-950 text-white">
              <th>Nombre</th>
              <th>País</th>
              <th width={500}>Reseña</th>
              <th>Seguir</th>
            </thead>
            <tbody>
                <tr class="bg-teal-50">
                  <td class='font-mono'>Adriana Maulini 🩷</td>
                  <td class="font-sans">Buenos Aires</td>
                  <td class="font-sans text-justify	">Adriana es una ingeniera de software con 10 años de experiencia en desarrollo de software con diferentes tecnologías, específicamente Microsoft .Net. Antes de unirse a AlixPartners, trabajó como desarrolladora senior en una destacada firma multinacional de consultoría de software.</td>
                  <td>
                    <button onClick={()=>window.open('https://www.youtube.com/@adrianatech', '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/youtube-play.png" alt="youtube-play"/></button>
                    <button onClick={()=>window.open('https://www.linkedin.com/in/adriana-maulini/', '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/linkedin.png" alt="linkedin"/></button>
                    <button onClick={()=>window.open('https://www.twitter.com/persefoneAM', '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/twitter-circled.png" alt="twitter-circled"/></button>
                  </td>
                </tr>
                <tr class="bg-teal-100">
                  <td class='font-mono'>Miriam Gonzalez 💜</td>
                  <td class="font-sans">España</td>
                  <td class="font-sans text-justify	">Creadora de contenido sobre programación y tecnología, divulgadora y podcaster. Con una gran comunidad de más de 260k followers en redes sociales, ha sido nombrada Top Voices Next Generation por LinkedIn como una de las 10 jóvenes profesionales a seguir en 2022. Además, trabajo en remoto como ingeniera de software para 64 Robots, una empresa de Estados Unidos, y he dado charlas técnicas en eventos internaciones sobre programación.</td>
                  <td>
                    <button onClick={()=>window.open('https://www.youtube.com/@miriamgonp', '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/youtube-play.png" alt="youtube-play"/></button>
                    <button onClick={()=>window.open('https://www.linkedin.com/in/miriamgonp', '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/linkedin.png" alt="linkedin"/></button>
                    <button onClick={()=>window.open('https://www.twitter.com/miriamgonp', '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/twitter-circled.png" alt="twitter-circled"/></button>
                  </td>
                </tr>
                <tr class="bg-teal-50">
                  <td class='font-mono'>Arelis Reyes 💙</td>
                  <td class="font-sans">México</td>
                  <td class="font-sans text-justify	">Más de dos años de experiencia enseñando programación enfocada en: Visión por Computador e IA (Python, OpenCV, Numpy, Pandas), Videojuegos 2D, 3D, Móvil, Realidad Aumentada (Godot, Roblox, Unity), desarrollo web (HTML, CSS, JavaScript ). Creador de contenidos educativos en redes sociales enfocados en tecnología, programación y videojuegos para principiantes.</td>
                  <td>
                    <button onClick={()=>window.open('https://www.youtube.com/@arelis_reyes19', '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/youtube-play.png" alt="youtube-play"/></button>
                    <button onClick={()=>window.open('https://www.linkedin.com/in/arelis-reyes', '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/linkedin.png" alt="linkedin"/></button>
                    <button onClick={()=>window.open('https://twitter.com/Arelis_reyes19', '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/twitter-circled.png" alt="twitter-circled"/></button>
                  </td>
                </tr>
            </tbody>
          </table>
    </>
  )
}

export default App
