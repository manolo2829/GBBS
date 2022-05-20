


const CrearForo = () => {
    return (  
        <div className="container-lg">
            <div className="row">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nombre del foro</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Contenido</label>
                        <textarea className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Crear</button>
                </form>
            </div>
        </div>
    );
}
 
export default CrearForo;