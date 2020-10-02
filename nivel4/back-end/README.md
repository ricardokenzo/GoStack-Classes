# RECUPERACAO DE SENHA

**RF**

- O usuario deve poder recuperesar sua senha informando o email
- O usuario deve receber um email com instruções de recuperação de senha
- o usuario deve poder resetar sua senha

**RNF**

- utilizar mailtrap para testar envios em ambiente de dev;
- utilizar amazon SES para envios em produção;
- O envio de emails deve acontecer em segundo plano (background job)

**RN**
- O link enviado por email para resetar senha, deve expirar em 2h;
- o usuario precisa confirmar a nova senha ao resetar sua senha

# Atualizacao do perfil

**RF**
- O usuario deve poder atualizar seu nome, email e senha;

**RN**
- O usuario nao pode alterar seu email para um email ja utilizado;
- Para atualizar sua senha, o usuario deve informar a senha antiga;
- Para atualizar a senha, o usuario precisa confirmar a nova senha;

# Painel do prestador

**RF**

- O usuario deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificacao sempre que houver um novo agendamento;
- o prestador deve poder visualizar as notificacoes nao lidar;

**RNF**
- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificacoes do prestador devem ser armazenadas no MongoDB;
- As notificacoes do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**
- a notificacao deve ter um status de lida ou nao lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**
- O usuario deve poder listar todos os prestadores de servico cadastrados
- O usuario deve poder listar os dias de um mes com pelo menos um horario disponivel de um prestador;
- O usuario deve poder listar horarios disponiveis em um dia especifico de um prestador;
- O usuario deve poder realizar um novo agendamento com um prestador;

**RNF**
- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponiveis entre 8h as 18h( Primeiro as 8h, ultimo as 17h)
- O usuario nao pode agendar em um horario ja ocupado;
- O usuario nao pode agendar em um horario que ja passou;
- O usuario nao pode agendar servicos consigo mesmo;
