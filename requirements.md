<!-- Exemplos -->
# RNF:

# BDD specs:

## Narrativa 1
```
	Como um admin do sistema
Quero que o sistema me mostre os menus que apenas Admin tem acesso
```

## Cenário
```
	Dado que um admin esteja logado
Quando acessar o menu, deve mostrar um menu com as opções:
	- Histórico de pedidos
	- Cadastros
		- Cadastrar categorias
		- Cadastrar produtos
		- Cadastrar adicionais (por produto)
		- Reorganizar menu (ordem das categorias na tela)

```

## Narrativa 2...