CREATE TABLE public.visitante
(
)

WITH (
    OIDS = FALSE
);

ALTER TABLE public.visitante
    OWNER to postgres;
	
ALTER TABLE public.visitante ADD COLUMN id serial;
ALTER TABLE public.visitante ADD COLUMN nome character varying(50)
ALTER TABLE public.visitante ADD COLUMN cpf character varying(50)
INSERT INTO visitante (nome, cpf)
VALUES
('Giovanne', '111.222'),
('Giulia', '222.111'),
('Larissa', '333.222'),
('Taiana', '222.333'),
('Alice', '444.333')

CREATE TABLE public.ingresso
(
)

WITH (
    OIDS = FALSE
);

ALTER TABLE public.ingresso
    OWNER to postgres;

ALTER TABLE public.ingresso ADD COLUMN id serial
ALTER TABLE public.ingresso ADD COLUMN data_visita date
ALTER TABLE public.ingresso ADD COLUMN id_visitante integer

INSERT INTO ingresso (data_visita, id_visitante)
values 
('2020-01-01', 1),
('2020-01-02', 2),
('2020-01-03', 3),
('2020-01-04', 1),
('2020-01-05', 2),
('2020-01-06', 2),
('2020-01-07', 3)
DELETE FROM ingresso WHERE id_visitante = null
select
visitante.nome,
visitante.cpf,
ingresso.data_visita
from ingresso
join visitante on visitante.id = ingresso.id_visitante

