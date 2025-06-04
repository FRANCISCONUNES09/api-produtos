function validateCreateProduto(req, res, next) {
    const {nome, categoria, preco, image_url} = req.body;

    if (!nome || !categoria || !preco || !image_url) {
        return res.status(400).send('Todos os campos são obrigatórios')
    }

    if(nome.length > 100) {
        return res.status(400).send('o nome do produto não deve ter mais de 100 caracteres')
    }

    if(categoria.length > 50) {
        return res.status(400).send('a categoria não pode ter mais de 50 caracteres')
    }

    next();
}

function validateDeleteProduto(req, res, next) {
    const { id } = req.params;

    if (!id) {
        return res.status(400).send('O ID do produto é obrigatório');
    }

    next()
}

module.exports = {
    validateCreateProduto,
    validateDeleteProduto
}