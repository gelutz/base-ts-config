
# Base Typescript Configs

> uso essas configs na maioria dos projetos que faço e estou com preguiça de ter que reconfigurar tudo de novo, principalmente mudando de projeto pra projeto.

## O quê

Basicamente, esse repo vai ser só o esqueleto de uma aplicação normal. Dou o clone dentro da pasta do projeto que quero, excluo o `.git` e rodo `git init`

#### Configurações gerais:
- Docker
- ESLint
- EditorConfig
> Sugiro desabilitar a extensão do EditorConfig no vscode, por que há um conflito com extensão do ESLint
  
#### Configurações do Backend:
- Dotenv
- Prisma
  
#### Configurações do Frontend:
As configurações do frontend ainda não foram adicionadas.
## Como 

```bash
git clone git@github.com:gelutz/base-ts-config.git
mv base-ts-config <yourproject> && cd <yourproject>
rm -rf .git && git init
find . -type f | xargs sed -i  's/base-ts-config/<yourproject>/g'
```

#### By [Lutz](http://github.com/gelutz)
