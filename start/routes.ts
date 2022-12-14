import Route from '@ioc:Adonis/Core/Route'


Route.get('/', async () => {
  return { hello: 'API' }

});

Route.post("/login", "AuthController.login");
Route.post("/logout", "AuthController.logout");

Route.post("/cliente/cadastro", "ClienteController.store");
Route.put("/cliente/editar", "ClienteController.update");

Route.get("/cidades", "CidadesController.index");
Route.get("/cidades/:id/estabelecimentos", "CidadesController.Estabelecimentos");

Route.get("/estabelecimento/:id", "EstabelecimentosController.show");

Route.group(() => {
  Route.get("auth/me", "AuthController.me");

  Route.resource("/enderecos", "EnderecosController").only([
    "store",
    "index",
    "update",
    "destroy"
  ]);

  Route.post("/pedidos", "PedidosController.store");
  Route.get("/pedidos", "PedidosController.index");
  Route.get("/pedidos/:hash_id", "PedidosController.show");

  Route.get("/estabelecimento/pedidos", "EstabelecimentosController.pedidos");
}).middleware("auth");

