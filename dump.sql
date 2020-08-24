--
-- PostgreSQL database dump
--
-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.2
-- Started on 2020-08-24 17:01:43 -03
SET
  statement_timeout = 0;

SET
  lock_timeout = 0;

SET
  idle_in_transaction_session_timeout = 0;

SET
  client_encoding = 'UTF8';

SET
  standard_conforming_strings = on;

SELECT
  pg_catalog.set_config('search_path', '', false);

SET
  check_function_bodies = false;

SET
  xmloption = content;

SET
  client_min_messages = warning;

SET
  row_security = off;

SET
  default_tablespace = '';

SET
  default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 24889)
-- Name: todo; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.todo (
  title text NOT NULL,
  "desc" text,
  iscomplete boolean,
  tag text,
  id integer
);

ALTER TABLE
  public.todo OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 24897)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public."user" (
  id text NOT NULL,
  realm text,
  username text,
  email text,
  email_verified boolean,
  verification_token text
);

ALTER TABLE
  public."user" OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 24905)
-- Name: usercredentials; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.usercredentials (
  id text NOT NULL,
  password text,
  userid text
);

ALTER TABLE
  public.usercredentials OWNER TO postgres;

--
-- TOC entry 3199 (class 0 OID 24889)
-- Dependencies: 202
-- Data for Name: todo; Type: TABLE DATA; Schema: public; Owner: postgres
--
COPY public.todo (title, "desc", iscomplete, tag, id)
FROM
  stdin;

\.--
-- TOC entry 3200 (class 0 OID 24897)
-- Dependencies: 203
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--
COPY public."user" (
  id,
  realm,
  username,
  email,
  email_verified,
  verification_token
)
FROM
  stdin;

123 no marcagus marcagus @gmail.com \ N \ N \.--
-- TOC entry 3201 (class 0 OID 24905)
-- Dependencies: 204
-- Data for Name: usercredentials; Type: TABLE DATA; Schema: public; Owner: postgres
--
COPY public.usercredentials (id, password, userid)
FROM
  stdin;

78e26e57 -0030 - 426f -9383 - f7d999333791 $ 2a $ 10 $ CCdSnXr0QJS3fQU / j0Wr0.alJgDVY.u3HQ7weiTmkkij1hWffMVW6 123 \.--
-- TOC entry 3071 (class 2606 OID 24914)
-- Name: usercredentials userCredentials_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
  ONLY public.usercredentials
ADD
  CONSTRAINT "userCredentials_pkey" PRIMARY KEY (id);

--
-- TOC entry 3069 (class 2606 OID 24932)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
  ONLY public."user"
ADD
  CONSTRAINT user_pkey PRIMARY KEY (id);

--
-- TOC entry 3072 (class 2606 OID 24940)
-- Name: usercredentials user_credentials_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE
  ONLY public.usercredentials
ADD
  CONSTRAINT user_credentials_user_id_fkey FOREIGN KEY (userid) REFERENCES public."user"(id);

-- Completed on 2020-08-24 17:01:43 -03
--
-- PostgreSQL database dump complete
--
