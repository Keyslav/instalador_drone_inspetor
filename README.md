# Instalador DRONE_INSPETOR

Site estático com o passo a passo de instalação do projeto **DRONE_INSPETOR** em **Ubuntu 24.04** (PX4 v1.16 + ROS 2 Jazzy + Gazebo Harmonic + Micro-XRCE-DDS).

## Estrutura

```
instalador_drone_inspetor/
├── index.html          # página única com todos os passos
├── assets/
│   ├── style.css       # estilos (sidebar, blocos de código, callouts)
│   └── script.js       # botões "Copiar" + destaque da seção ativa
└── README.md
```

## Visualizar localmente

Basta abrir o `index.html` no navegador:

```bash
xdg-open index.html
```

Ou servir por HTTP (recomendado, para o `clipboard` funcionar sem restrições):

```bash
python3 -m http.server 8000
# depois abra http://localhost:8000
```

## Publicar online

O site é 100% estático (HTML/CSS/JS, sem backend). Pode ser hospedado em qualquer lugar:

- **GitHub Pages** — suba a pasta num repositório e ative o Pages na branch/pasta.
- **Netlify / Vercel / Cloudflare Pages** — arraste a pasta ou conecte o repositório.
- Qualquer servidor web (Apache, Nginx) apontando para esta pasta.

## Melhorias aplicadas em relação ao rascunho

Marcadas no próprio site com etiquetas **Correção** / **Complemento**:

1. Caminho do script de setup do PX4 corrigido (`./Tools/setup/ubuntu.sh`).
2. `curl` do QGroundControl com `-L` e `-o` (antes não salvava o arquivo).
3. Pacote FUSE do Ubuntu 24.04 corrigido para `libfuse2t64`.
4. Terminal 4 (Middleware) preenchido com `MicroXRCEAgent udp4 -p 8888`.
5. `cd ~/PX4-Autopilot` adicionado antes do `sed` do airframe.
6. Passo de carregar o `.bashrc` via `echo` (em vez de editar no nano).
7. Verificações e alternativas para o NumPy, download por curl e airframe.
8. Comentários explicativos em todos os blocos de comandos.
