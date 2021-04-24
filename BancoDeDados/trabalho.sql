CREATE TABLE public.ator_atriz
(
    id serial,
    nome character varying,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.ator_atriz
    OWNER to postgres;

	
CREATE TABLE public.filme
(
    id serial,
    nome character varying,
	id_categoria integer,
	id_elenco integer,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.filme
    OWNER to postgres;
	
	CREATE TABLE public.elenco
(
    id serial,
    id_filme integer,
    id_ator_atriz integer,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.elenco
    OWNER to postgres;
	ALTER TABLE public.filme
    ADD COLUMN id_elenco integer;
	
	INSERT INTO ator_atriz (nome)
VALUES ('Kirsten Dunst'),
('Brad Pitt'),
('jake gyllenhaal'),
('Anya Taylor-Joy'),
('James Franco')

insert into filme (nome)
values ('Nocturnal Animals'),
('SpiderMan 2002'),
('FightClub'),
('The Witch'),
('Melancholia'),
('Donnie Darko'),
('This is The End')

INSERT INTO elenco (id_filme, id_ator_atriz)
VALUES (7, 3) 
(1 , 1),
(1, 5),
(2, 2),
(3, 4),
(4, 1),
(5, 3),
(6, 5)

insert into categoria (nome)
values ('Drama'),
('Ação'),
('Terror'),
('Comédia'),
('Ficção cientifica')
insert into filme (id_categoria)
values,
(1),
(3),
(1),
(5),
(4)

insert into cliente (nome, id_filme)
values ('Giovanne', 1),
('Giovanne', 7)
('Alice', 2),
('Larissa', 3),
('Taiana', 4),
('Giulia', 5),
('Billy', 6)

select --Filmes que o cliente alugou
cliente.nome as cliente,
filme.nome as alugou,
categoria.nome as categoria
from cliente
join filme on filme.id = cliente.id_filme
join categoria on categoria.id = filme.id_categoria
order by cliente 

select --Filme + Ator/Atriz
ator_atriz.nome as ator_atriz,
filme.nome as filme,
categoria.nome as categoria
from elenco
join ator_atriz on ator_atriz.id = elenco.id_ator_atriz
join filme on filme.id = elenco.id_filme
join categoria on categoria.id = filme.id_categoria
order by ator_atriz

select --Filme separado por categoria TERROR
filme.nome as filme,
categoria.nome as categoria,
ator_atriz.nome
from filme
join categoria on categoria.id = filme.id_categoria
join ator_atriz on ator_atriz.id = filme.id_elenco
where categoria.nome = 'Terror'

select --Separados por filme que um ATOR/ATRIZ participou, no caso Kirsten Dunst.
filme.nome as filme,
categoria.nome as categoria,
ator_atriz.nome
from filme
join categoria on categoria.id = filme.id_categoria
join ator_atriz on ator_atriz.id = filme.id_elenco
where ator_atriz.nome = 'Kirsten Dunst'
	