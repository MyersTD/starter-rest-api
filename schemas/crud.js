function create_ (Model, reg, res) {
    const new_model = new Model(req.body);
    new_model.save((error) => {
      if (error) {
        return next (error)
      } else {
        res.send('Model created successfully');
      }
    });
}

function read_all_ (Model, req, res) {
    Model.find((error, model) => {
        if (error) {
          return next (error)
        } else {
          res.send(model);
        }
      });
}

function update_ (Model, req, res) {
    Model.findByIdAndUpdate(req.params.id, req.body, (error) => {
        if (error) {
          return next (error)
        } else {
          res.send('Model updated successfully');
        }
      });
}

function delete_ (Model) {
    Model.findByIdAndDelete(req.params.id, (error) => {
        if (error) {
          return next (error)
        } else {
          res.send('Model deleted successfully');
        }
      });
}

module.exports = {create_, read_all_, update_, delete_}