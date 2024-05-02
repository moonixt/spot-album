import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Implemetation = () => {
  const NavigatePost = useNavigate()
  const Post = () =>{
    NavigatePost('/post')
  }
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/albums/");
        setAlbums(response.data);
        console.log(response);
      } catch (error) {
        console.error("Server may not connected:", error);
      }
    };
    fetchAlbums();
  }, []);

  const NavigateFoward = useNavigate();
  const Foward = () => {
    NavigateFoward("/");
  };

  return (
    <div>
      <div>
        <button onClick={Foward}>Próxima</button>
      </div>
      <div className="pt-3">
        <button onClick={Post}>Postar</button>
      </div>
      <div id="Leitura">
        {albums.map((album) => (
          <div key={album.id} className="space-y-3 ">
            <h1 className="pt-10 pb-5">{album.artista}</h1>
            <div className="card lg:card-side bg-black shadow-xl">
              <figure>
              <img className='pb-2 rounded-2xl ' src={album.capa} alt={album.nome} style={{width: '400px', height: '350px',}} />
              </figure>
              <div className="card-body">
                <h1 className="card-title text-5xl pb-10">{album.nome}</h1>
                <h2 className="justify-left flex text-xl">Novo album lançado!</h2>
                <span className="loading loading-bars loading-md"></span>
                <p className="justify-left flex text-1xl">
              Clique no botão para ser redirecionado.
            </p>
            <p className="justify-left flex">{album.ano}</p>
                <div className="card-actions justify-end">
                  <button className="">Escutar</button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div></div>
      </div>
    </div>
  );
};

export default Implemetation;