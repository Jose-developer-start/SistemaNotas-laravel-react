import React, { useState } from 'react';

export default function AddRols() {
    const [rol, setRol] = useState({
        name: '',
        description: ''
    });
    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div class="col-md-12">
            <div class="tile">
                <h3 class="tile-title">Agregar roles</h3>
                <div class="tile-body">
                    <form class="form-horizontal" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div class="form-group row">
                                    <label class="control-label col-md-3">Nombre</label>
                                    <div class="col-md-8">
                                        <input name="name" onChange={handleChange} class="form-control" type="text" placeholder="Nombre de rol" />
                                    </div>
                                </div>

                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div class="form-group row">
                                    <label class="control-label col-md-3">Descripción</label>
                                    <div class="col-md-8">
                                        <textarea name="description" onChange={handleChange} class="form-control" rows="4" placeholder="Digitar la descripción del rol"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tile-footer">
                            <div class="row">
                                <div class="col-md-8 col-md-offset-3">
                                    <button class="btn btn-primary" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i>Register</button>&nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}
