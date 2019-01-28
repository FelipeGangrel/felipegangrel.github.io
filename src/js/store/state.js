const tab = `<span class="tab"></span>`;
const heart = `<i class="fa fa-heart"></i>`;

const files = [
    { 
        filename: 'me.js',
        content: `

            <span class="comment">
            /****************************************************************<br />
             * Olá mundo! Sou Felipe &lt;Gangrel&gt; Pires de Oliveira. <br />
             * Atuo como desenvolvedor web full stack em Volta Redonda, RJ <br />
             * Apaixonado por aprender e aplicar novas tecnologias e <br />
             * boas práticas de desenvolvimento  <br />
             ****************************************************************/<br />
            </span><br />
            <span class="const">const</span> <span class="name">name</span> <span class="definer">=</span> <span class="string">'Felipe \<Gangrel\> Pires de Oliveira'</span>;<br />
            <span class="const">const</span> <span class="name">email</span> <span class="definer">=</span> <span class="string">'<a href="mailto:felipefrog@gmail.com">felipefrog@gmail.com</a>'</span>;<br />
            <span class="const">const</span> <span class="name">telefone</span> <span class="definer">=</span> <span class="string">'24 99253 8145'</span>;<br />
            <span class="const">const</span> <span class="name">twitter</span> <span class="definer">=</span> <span class="string link">'<a target="_blank" href="https://twitter.com/felipegangrel">https://twitter.com/felipegangrel</a>'</span>;<br />
            <span class="const">const</span> <span class="name">tranposCo</span> <span class="definer">=</span> <span class="string link">'<a target="_blank" href="https://trampos.co/olveirafelipe">https://trampos.co/olveirafelipe</a>'</span>;<br />
            <span class="const">const</span> <span class="name">linkedIn</span> <span class="definer">=</span> <span class="string link">'<a target="_blank" href="https://www.linkedin.com/in/felipegangrel/">https://www.linkedin.com/in/felipegangrel/</a>'</span>;<br />

        `,
    },
    { 
        filename: 'skills.js',
        content: `

            <span class="const">const</span> <span class="name">apps</span> <span class="definer">=</span> [ <br />
                ${tab}<span class="string">'React Native'</span>, <span class="comment">// Trabalhando em um projeto </span> <br />
                ${tab}<span class="string">'Flutter'</span>, <span class="comment">// De curioso a apaixonado </span> <br />
                ${tab}<span class="string">'Ionic Framework'</span>, <span class="comment">// Apps simples e rápidos </span> <br />
            ];<br />

            <br />

            <span class="const">const</span> <span class="name">frontend</span> <span class="definer">=</span> [ <br />
                ${tab}<span class="string">'HTML5 + CSS3'</span>, <span class="comment">// + LESS e SASS </span> <br />
                ${tab}<span class="string">'JavaScript'</span>, <span class="comment">// Nos sabores Vanilha ES6 e também com JQuery </span> <br />
                ${tab}<span class="string">'VueJS'</span>, <span class="comment">// Meu framework para componentização de view preferido ${heart} </span> <br />
                ${tab}<span class="string">'Angular'</span>, <span class="comment">// Experiência em desenvolvimento mobile </span> <br />
            ];<br />

            <br />

            <span class="const">const</span> <span class="name">backend</span> <span class="definer">=</span> [ <br />
                ${tab}<span class="string">'PHP'</span>, <span class="comment">// PHP Orientado a objetos + MVC</span> <br />
                ${tab}<span class="string">'Laravel e Doctrine ORM'</span>, <span class="comment">// Não tem como não amar esta dupla</span> <br />
                ${tab}<span class="string">'Mysql'</span>, <span class="comment">// Usando em praticamente todos os meus projetos</span> <br />
                ${tab}<span class="string">'Firebase e Apache CouchDB'</span>, <span class="comment">// Alguns experimentos</span> <br />
                ${tab}<span class="string">'NodeJS'</span>, <span class="comment">// Dando meus primeiros passos</span> <br />
            ];<br />
            
            <br />

            <span class="const">const</span> <span class="name">tools</span> <span class="definer">=</span> [ <br />
                ${tab}<span class="string">'Webpack'</span>, <span class="comment">// Meu bundler favorito </span> <br />
                ${tab}<span class="string">'gulp'</span>, <span class="comment">// Task runner para pequenos projetos </span> <br />
                ${tab}<span class="string">'Docker'</span>, <span class="comment">// Meu ambiente de desevolvimento em sua melhor forma </span> <br />
            ];<br />

        `,
    },
    {
        filename: 'jobs-and-education.js',
        content: `

            <span class="import">import</span> {<span class="name">JobCollection</span>, <span class="name">EducationCollection</span>} <span class="from">from</span> <span class="string">'@felipeGangrel/Collections'</span> <br />

            <br />

            <span class="var">var</span> <span class="name">jobs</span> <span class="definer">=</span> <span class="new">new</span> <span class="class">JobCollection</span>(); <br />
            <span class="var">var</span> <span class="name">formacao</span> <span class="definer">=</span> <span class="new">new</span> <span class="class">EducationCollection</span>(); <br />

            <br />

            <span class="comment">
                // Emprego atual
            </span> <br />

            <span class="name">jobs</span><span class="method">.add</span>(</span><span class="new">new</span> <span class="class">Job</span>(<span class="string">'Desenvolvedor Web + Apps full stack'</span>, { <br />
                ${tab}<span class="definer">ano :</span> 2018,<br />
                ${tab}<span class="definer">instituicao :</span> <span class="string">'Sivis Tecnologia'</span>,<br />
                ${tab}<span class="definer">local :</span> <span class="string">'Volta Redonda - RJ'</span>,<br />
            }));<br />

            <br />

            <span class="name">jobs</span><span class="method">.add</span>(</span><span class="new">new</span> <span class="class">Job</span>(<span class="string">'Desenvolvedor Web full stack'</span>, { <br />
                ${tab}<span class="definer">ano :</span> 2015,<br />
                ${tab}<span class="definer">instituicao :</span> <span class="string">'Foco Comunicação'</span>,<br />
                ${tab}<span class="definer">local :</span> <span class="string">'Volta Redonda - RJ'</span>,<br />
            }));<br />

            <br />

            <span class="name">jobs</span><span class="method">.add</span>(</span><span class="new">new</span> <span class="class">Job</span>(<span class="string">'Desenvolvedor Web'</span>, { <br />
                ${tab}<span class="definer">ano :</span> 2014,<br />
                ${tab}<span class="definer">instituicao :</span> <span class="string">'Prefeitura de Barra do Piraí'</span>,<br />
                ${tab}<span class="definer">local :</span> <span class="string">'Barra do Piraí - RJ'</span>,<br />
            }));<br />

            <br />

            <span class="name">jobs</span><span class="method">.add</span>(</span><span class="new">new</span> <span class="class">Job</span>(<span class="string">'Instrutor de Desenvolvimento Web'</span>, { <br />
                ${tab}<span class="definer">ano :</span> 2014,<br />
                ${tab}<span class="definer">instituicao :</span> <span class="string">'SENAI'</span>,<br />
                ${tab}<span class="definer">local :</span> <span class="string">'Vassouras - RJ'</span>,<br />
            }));<br />

            <br />

            <span class="name">formacao</span><span class="method">.add</span>(</span><span class="new">new</span> <span class="class">Education</span>(<span class="string">'Bacharelado em Sistemas de Informação'</span>, { <br />
                ${tab}<span class="definer">ano :</span> 2009,<br />
                ${tab}<span class="definer">instituicao :</span> <span class="string">'Universidade Severino Sombra'</span>,<br />
                ${tab}<span class="definer">local :</span> <span class="string">'Vassouras - RJ'</span>,<br />
            }));<br />

            <br />

            
        `,
    }
];

export default {
    files: files,
    open: [
        files[0],
        files[1],
    ],
    active: files[0],
    menuToggle: window.innerWidth < 800,
}