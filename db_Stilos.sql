PGDMP         1            
    z            Stilos    14.5    14.5 L    p           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            q           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            r           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            s           1262    17180    Stilos    DATABASE     h   CREATE DATABASE "Stilos" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Argentina.1252';
    DROP DATABASE "Stilos";
                postgres    false            ?            1259    17235    personas    TABLE     ?  CREATE TABLE public.personas (
    id integer NOT NULL,
    nombre_uno character varying(100) NOT NULL,
    nombre_dos character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    fk_localidad integer NOT NULL,
    fk_provincia integer NOT NULL,
    fk_genero integer NOT NULL,
    telefono character varying(100) NOT NULL,
    "createdAt" date,
    "updatedAt" date,
    fk_usuario integer NOT NULL,
    "deletedAt" date
);
    DROP TABLE public.personas;
       public         heap    postgres    false            ?            1259    17238    personas_id_persona_seq    SEQUENCE     ?   CREATE SEQUENCE public.personas_id_persona_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.personas_id_persona_seq;
       public          postgres    false    219            t           0    0    personas_id_persona_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.personas_id_persona_seq OWNED BY public.personas.id;
          public          postgres    false    220            ?            1259    17184    carrito    TABLE     ?   CREATE TABLE public.carrito (
    id integer DEFAULT nextval('public.personas_id_persona_seq'::regclass) NOT NULL,
    fk_usuario integer NOT NULL,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.carrito;
       public         heap    postgres    false    220            ?            1259    17187    carrito_Detalle    TABLE     `  CREATE TABLE public."carrito_Detalle" (
    id integer DEFAULT nextval('public.personas_id_persona_seq'::regclass) NOT NULL,
    fk_id_carrito integer NOT NULL,
    fk_producto_id integer NOT NULL,
    cantidad integer,
    estado_compra character varying,
    fecha_compra date,
    precio_unitario real,
    "createdAt" date,
    "updatedAt" date
);
 %   DROP TABLE public."carrito_Detalle";
       public         heap    postgres    false    220            ?            1259    17195    color_producto    TABLE     ?   CREATE TABLE public.color_producto (
    id integer NOT NULL,
    color character varying,
    "createdAt" date,
    "updatedAt" date
);
 "   DROP TABLE public.color_producto;
       public         heap    postgres    false            ?            1259    17200 	   domicilio    TABLE     ?  CREATE TABLE public.domicilio (
    id integer DEFAULT nextval('public.personas_id_persona_seq'::regclass) NOT NULL,
    domicilio character varying,
    fk_persona integer NOT NULL,
    calle character varying,
    departamento character varying,
    piso character varying,
    "num_Casa" character varying,
    barrio character varying,
    "createdAt" date,
    "updatedAt" date,
    "deletedAt" date
);
    DROP TABLE public.domicilio;
       public         heap    postgres    false    220            ?            1259    17205    genero    TABLE     ?   CREATE TABLE public.genero (
    id integer NOT NULL,
    genero character varying,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.genero;
       public         heap    postgres    false            ?            1259    17210    genero_producto    TABLE     ?   CREATE TABLE public.genero_producto (
    id integer NOT NULL,
    genero character varying,
    "createdAt" date,
    "updatedAt" date
);
 #   DROP TABLE public.genero_producto;
       public         heap    postgres    false            ?            1259    17215 	   localidad    TABLE     ?   CREATE TABLE public.localidad (
    id integer NOT NULL,
    localidad character varying,
    fk_provincia integer,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.localidad;
       public         heap    postgres    false            ?            1259    17220    marca_producto    TABLE     ?   CREATE TABLE public.marca_producto (
    id integer NOT NULL,
    marca character varying,
    "createdAt" date,
    "updatedAt" date
);
 "   DROP TABLE public.marca_producto;
       public         heap    postgres    false            ?            1259    17225    orden_de_compra    TABLE     &  CREATE TABLE public.orden_de_compra (
    id integer DEFAULT nextval('public.personas_id_persona_seq'::regclass) NOT NULL,
    fk_id_carrito integer NOT NULL,
    cantidad_producto integer,
    metodo_pago character varying,
    total_pagado real,
    "createdAt" date,
    "updatedAt" date
);
 #   DROP TABLE public.orden_de_compra;
       public         heap    postgres    false    220            ?            1259    17230    permiso_usuario    TABLE     ?   CREATE TABLE public.permiso_usuario (
    id integer NOT NULL,
    nivel_permiso character varying NOT NULL,
    "createdAt" date,
    "updatedAt" date
);
 #   DROP TABLE public.permiso_usuario;
       public         heap    postgres    false            ?            1259    17259    usuarios    TABLE     ?   CREATE TABLE public.usuarios (
    id integer NOT NULL,
    email character varying(250) NOT NULL,
    contrasena character varying(250) NOT NULL,
    "createdAt" date,
    "updatedAt" date,
    fk_permiso_usuario integer DEFAULT 1 NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            ?            1259    17264    usuarios_id_usuario_seq    SEQUENCE     ?   CREATE SEQUENCE public.usuarios_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.usuarios_id_usuario_seq;
       public          postgres    false    225            u           0    0    usuarios_id_usuario_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.usuarios_id_usuario_seq OWNED BY public.usuarios.id;
          public          postgres    false    226            ?            1259    17239    producto    TABLE     ?  CREATE TABLE public.producto (
    id integer DEFAULT nextval('public.usuarios_id_usuario_seq'::regclass) NOT NULL,
    existencia_producto integer,
    imagen_producto character varying,
    precio_unitario real,
    fk_talle integer,
    fk_color integer NOT NULL,
    fk_genero integer NOT NULL,
    fk_marca integer NOT NULL,
    fk_tipo integer,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.producto;
       public         heap    postgres    false    226            ?            1259    17244 	   provincia    TABLE     ?   CREATE TABLE public.provincia (
    id integer NOT NULL,
    provincia character varying,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.provincia;
       public         heap    postgres    false            ?            1259    17249    talle_producto    TABLE     ?   CREATE TABLE public.talle_producto (
    id integer NOT NULL,
    talle character varying,
    "createdAt" date,
    "updatedAt" date
);
 "   DROP TABLE public.talle_producto;
       public         heap    postgres    false            ?            1259    17254    tipo_producto    TABLE     ?   CREATE TABLE public.tipo_producto (
    id integer NOT NULL,
    tipo_producto character varying,
    "createdAt" date,
    "updatedAt" date
);
 !   DROP TABLE public.tipo_producto;
       public         heap    postgres    false            ?           2604    17265    personas id    DEFAULT     r   ALTER TABLE ONLY public.personas ALTER COLUMN id SET DEFAULT nextval('public.personas_id_persona_seq'::regclass);
 :   ALTER TABLE public.personas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219            ?           2604    17266    usuarios id    DEFAULT     r   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_usuario_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225            \          0    17184    carrito 
   TABLE DATA           K   COPY public.carrito (id, fk_usuario, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    209   a       ]          0    17187    carrito_Detalle 
   TABLE DATA           ?   COPY public."carrito_Detalle" (id, fk_id_carrito, fk_producto_id, cantidad, estado_compra, fecha_compra, precio_unitario, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    210   Na       ^          0    17195    color_producto 
   TABLE DATA           M   COPY public.color_producto (id, color, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    211   ?a       _          0    17200 	   domicilio 
   TABLE DATA           ?   COPY public.domicilio (id, domicilio, fk_persona, calle, departamento, piso, "num_Casa", barrio, "createdAt", "updatedAt", "deletedAt") FROM stdin;
    public          postgres    false    212   `b       `          0    17205    genero 
   TABLE DATA           F   COPY public.genero (id, genero, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    213   ?b       a          0    17210    genero_producto 
   TABLE DATA           O   COPY public.genero_producto (id, genero, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    214   'c       b          0    17215 	   localidad 
   TABLE DATA           Z   COPY public.localidad (id, localidad, fk_provincia, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   pc       c          0    17220    marca_producto 
   TABLE DATA           M   COPY public.marca_producto (id, marca, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    216    d       d          0    17225    orden_de_compra 
   TABLE DATA           ?   COPY public.orden_de_compra (id, fk_id_carrito, cantidad_producto, metodo_pago, total_pagado, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    217   cd       e          0    17230    permiso_usuario 
   TABLE DATA           V   COPY public.permiso_usuario (id, nivel_permiso, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   ?d       f          0    17235    personas 
   TABLE DATA           ?   COPY public.personas (id, nombre_uno, nombre_dos, apellido, fk_localidad, fk_provincia, fk_genero, telefono, "createdAt", "updatedAt", fk_usuario, "deletedAt") FROM stdin;
    public          postgres    false    219   ?d       h          0    17239    producto 
   TABLE DATA           ?   COPY public.producto (id, existencia_producto, imagen_producto, precio_unitario, fk_talle, fk_color, fk_genero, fk_marca, fk_tipo, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221   ?e       i          0    17244 	   provincia 
   TABLE DATA           L   COPY public.provincia (id, provincia, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    222   If       j          0    17249    talle_producto 
   TABLE DATA           M   COPY public.talle_producto (id, talle, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    223   ?f       k          0    17254    tipo_producto 
   TABLE DATA           T   COPY public.tipo_producto (id, tipo_producto, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    224   ?f       l          0    17259    usuarios 
   TABLE DATA           g   COPY public.usuarios (id, email, contrasena, "createdAt", "updatedAt", fk_permiso_usuario) FROM stdin;
    public          postgres    false    225   Tg       v           0    0    personas_id_persona_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.personas_id_persona_seq', 50, true);
          public          postgres    false    220            w           0    0    usuarios_id_usuario_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.usuarios_id_usuario_seq', 77, true);
          public          postgres    false    226            ?           2606    17270 $   carrito_Detalle carrito_Detalle_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."carrito_Detalle"
    ADD CONSTRAINT "carrito_Detalle_pkey" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public."carrito_Detalle" DROP CONSTRAINT "carrito_Detalle_pkey";
       public            postgres    false    210            ?           2606    17272    carrito carrito_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.carrito
    ADD CONSTRAINT carrito_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.carrito DROP CONSTRAINT carrito_pkey;
       public            postgres    false    209            ?           2606    17276 "   color_producto color_producto_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.color_producto
    ADD CONSTRAINT color_producto_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.color_producto DROP CONSTRAINT color_producto_pkey;
       public            postgres    false    211            ?           2606    17278    domicilio domicilio_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.domicilio
    ADD CONSTRAINT domicilio_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.domicilio DROP CONSTRAINT domicilio_pkey;
       public            postgres    false    212            ?           2606    17280    genero genero_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.genero
    ADD CONSTRAINT genero_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.genero DROP CONSTRAINT genero_pkey;
       public            postgres    false    213            ?           2606    17282 $   genero_producto genero_producto_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.genero_producto
    ADD CONSTRAINT genero_producto_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.genero_producto DROP CONSTRAINT genero_producto_pkey;
       public            postgres    false    214            ?           2606    17284    localidad localidad_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.localidad
    ADD CONSTRAINT localidad_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.localidad DROP CONSTRAINT localidad_pkey;
       public            postgres    false    215            ?           2606    17286 "   marca_producto marca_producto_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.marca_producto
    ADD CONSTRAINT marca_producto_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.marca_producto DROP CONSTRAINT marca_producto_pkey;
       public            postgres    false    216            ?           2606    17288 $   orden_de_compra orden_de_compra_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.orden_de_compra
    ADD CONSTRAINT orden_de_compra_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.orden_de_compra DROP CONSTRAINT orden_de_compra_pkey;
       public            postgres    false    217            ?           2606    17290 $   permiso_usuario permiso_usuario_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.permiso_usuario
    ADD CONSTRAINT permiso_usuario_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.permiso_usuario DROP CONSTRAINT permiso_usuario_pkey;
       public            postgres    false    218            ?           2606    17292    personas pk_persona 
   CONSTRAINT     Q   ALTER TABLE ONLY public.personas
    ADD CONSTRAINT pk_persona PRIMARY KEY (id);
 =   ALTER TABLE ONLY public.personas DROP CONSTRAINT pk_persona;
       public            postgres    false    219            ?           2606    17294    usuarios pk_usuario 
   CONSTRAINT     Q   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT pk_usuario PRIMARY KEY (id);
 =   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT pk_usuario;
       public            postgres    false    225            ?           2606    17296    producto producto_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.producto DROP CONSTRAINT producto_pkey;
       public            postgres    false    221            ?           2606    17298    provincia provincia_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.provincia
    ADD CONSTRAINT provincia_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.provincia DROP CONSTRAINT provincia_pkey;
       public            postgres    false    222            ?           2606    17300 "   talle_producto talle_producto_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.talle_producto
    ADD CONSTRAINT talle_producto_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.talle_producto DROP CONSTRAINT talle_producto_pkey;
       public            postgres    false    223            ?           2606    17302     tipo_producto tipo_producto_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.tipo_producto
    ADD CONSTRAINT tipo_producto_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.tipo_producto DROP CONSTRAINT tipo_producto_pkey;
       public            postgres    false    224            ?           2606    17446    orden_de_compra fk_carrito    FK CONSTRAINT     ?   ALTER TABLE ONLY public.orden_de_compra
    ADD CONSTRAINT fk_carrito FOREIGN KEY (fk_id_carrito) REFERENCES public.carrito(id) NOT VALID;
 D   ALTER TABLE ONLY public.orden_de_compra DROP CONSTRAINT fk_carrito;
       public          postgres    false    217    209    3234            ?           2606    17313    producto fk_color    FK CONSTRAINT     ?   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT fk_color FOREIGN KEY (fk_color) REFERENCES public.color_producto(id) ON UPDATE CASCADE NOT VALID;
 ;   ALTER TABLE ONLY public.producto DROP CONSTRAINT fk_color;
       public          postgres    false    3238    211    221            ?           2606    17394    personas fk_genero    FK CONSTRAINT     ~   ALTER TABLE ONLY public.personas
    ADD CONSTRAINT fk_genero FOREIGN KEY (fk_genero) REFERENCES public.genero(id) NOT VALID;
 <   ALTER TABLE ONLY public.personas DROP CONSTRAINT fk_genero;
       public          postgres    false    219    3242    213            ?           2606    17318    producto fk_genero_producto    FK CONSTRAINT     ?   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT fk_genero_producto FOREIGN KEY (fk_genero) REFERENCES public.genero_producto(id) ON UPDATE CASCADE NOT VALID;
 E   ALTER TABLE ONLY public.producto DROP CONSTRAINT fk_genero_producto;
       public          postgres    false    221    214    3244            ?           2606    17323    carrito_Detalle fk_id_carrito    FK CONSTRAINT     ?   ALTER TABLE ONLY public."carrito_Detalle"
    ADD CONSTRAINT fk_id_carrito FOREIGN KEY (fk_id_carrito) REFERENCES public.carrito(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 I   ALTER TABLE ONLY public."carrito_Detalle" DROP CONSTRAINT fk_id_carrito;
       public          postgres    false    210    209    3234            ?           2606    17389    personas fk_localidad    FK CONSTRAINT     ?   ALTER TABLE ONLY public.personas
    ADD CONSTRAINT fk_localidad FOREIGN KEY (fk_localidad) REFERENCES public.localidad(id) NOT VALID;
 ?   ALTER TABLE ONLY public.personas DROP CONSTRAINT fk_localidad;
       public          postgres    false    3246    215    219            ?           2606    17328    producto fk_marca    FK CONSTRAINT     ?   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT fk_marca FOREIGN KEY (fk_marca) REFERENCES public.marca_producto(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 ;   ALTER TABLE ONLY public.producto DROP CONSTRAINT fk_marca;
       public          postgres    false    216    3248    221            ?           2606    17401    usuarios fk_permiso_usuario    FK CONSTRAINT     ?   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT fk_permiso_usuario FOREIGN KEY (fk_permiso_usuario) REFERENCES public.permiso_usuario(id) NOT VALID;
 E   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT fk_permiso_usuario;
       public          postgres    false    3252    218    225            ?           2606    17343    domicilio fk_persona    FK CONSTRAINT     ?   ALTER TABLE ONLY public.domicilio
    ADD CONSTRAINT fk_persona FOREIGN KEY (fk_persona) REFERENCES public.personas(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 >   ALTER TABLE ONLY public.domicilio DROP CONSTRAINT fk_persona;
       public          postgres    false    219    212    3254            ?           2606    17348    carrito_Detalle fk_prodcuto_id    FK CONSTRAINT     ?   ALTER TABLE ONLY public."carrito_Detalle"
    ADD CONSTRAINT fk_prodcuto_id FOREIGN KEY (fk_producto_id) REFERENCES public.producto(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 J   ALTER TABLE ONLY public."carrito_Detalle" DROP CONSTRAINT fk_prodcuto_id;
       public          postgres    false    210    3256    221            ?           2606    17353    localidad fk_provincia    FK CONSTRAINT     ?   ALTER TABLE ONLY public.localidad
    ADD CONSTRAINT fk_provincia FOREIGN KEY (fk_provincia) REFERENCES public.provincia(id) NOT VALID;
 @   ALTER TABLE ONLY public.localidad DROP CONSTRAINT fk_provincia;
       public          postgres    false    3258    215    222            ?           2606    17384    personas fk_provincia    FK CONSTRAINT     ?   ALTER TABLE ONLY public.personas
    ADD CONSTRAINT fk_provincia FOREIGN KEY (fk_provincia) REFERENCES public.provincia(id) NOT VALID;
 ?   ALTER TABLE ONLY public.personas DROP CONSTRAINT fk_provincia;
       public          postgres    false    3258    219    222            ?           2606    17358    producto fk_talle    FK CONSTRAINT     ?   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT fk_talle FOREIGN KEY (fk_talle) REFERENCES public.talle_producto(id) ON UPDATE CASCADE NOT VALID;
 ;   ALTER TABLE ONLY public.producto DROP CONSTRAINT fk_talle;
       public          postgres    false    221    3260    223            ?           2606    17363    producto fk_tipo    FK CONSTRAINT     ?   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT fk_tipo FOREIGN KEY (fk_tipo) REFERENCES public.tipo_producto(id) ON UPDATE CASCADE NOT VALID;
 :   ALTER TABLE ONLY public.producto DROP CONSTRAINT fk_tipo;
       public          postgres    false    3262    224    221            ?           2606    17368    personas fk_usuario    FK CONSTRAINT     ?   ALTER TABLE ONLY public.personas
    ADD CONSTRAINT fk_usuario FOREIGN KEY (fk_usuario) REFERENCES public.usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 =   ALTER TABLE ONLY public.personas DROP CONSTRAINT fk_usuario;
       public          postgres    false    3264    225    219            ?           2606    17406    carrito fk_usuario    FK CONSTRAINT     ?   ALTER TABLE ONLY public.carrito
    ADD CONSTRAINT fk_usuario FOREIGN KEY (fk_usuario) REFERENCES public.usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 <   ALTER TABLE ONLY public.carrito DROP CONSTRAINT fk_usuario;
       public          postgres    false    209    225    3264            \   '   x?32?44?4202?54?54Ebr?rZ??????? A
-      ]   ?   x?36?42?4?????9?%?)??FFF?????f?Ffz??S$I.c?t?R?????nK<??)?mA?nK?ns?t?
5?vQ?&?P݆??y
ɉEE??1~z̑?\????As%??=... A???      ^   n   x?u?;?0D??]????͒X?hcKKp??I?f??޼?;Z???
?"];?b??%'B??c7?Q?f?(?ZV?=??ř=`6-/??????>b??1?SW?;]B'?,AU      _   q   x?31?,?/RH??T???M,V(?,?W???44??IT(,MUH-.ITH?Q?IL?WHIU??THN,N???41?H=?1????Ԭ|N###]CC]C3?L.szZfAk?b??b???? ?A\?      `   6   x?3??/)??4202?54?5?@brq?????e??R`???X?\??[E? w8?      a   9   x?3???,N??4202?54?5?@brq?????e???P`???X?\??[E? ?R?      b   ?   x?Eͻ
?@????S?B?m+?N3?lv??*?ӻE???????I?d?í̵???K*t?K?i?o??ǃM,s?B?f=?'U?ӛu?cI?Lq?z?V??@hg???T?cf??Õ??????s?N?1?      c   S   x?3?-Vp?M-??N?4202?54?5?@br?p%f????7?I,K-??,?ġ3 1?$#???!?Sb^J>?=... ?F$g      d   0   x?31?42?????Җ?z???FFF?????fHL.S"??qqq ?k?      e   C   x?3?L??L?+I?4202?54?5?@brq&??f?e?%?d???Pf?Y\Z?ZTZ?Z?CE? ???      f   ?   x??PA
?0<o??d7?????^?&?b1?X???TZ?Ȓ?2??8??:?N???Gh?g?b?1??ڡv??v?;?[???e"$?>1p??^n?Z???!4??[(2m????c???[?t??????|q^?K? Ѡ?(?~????9?^*M?q?ļ???C???%c?Y?+?2??R?^)?ސZ?      h   {   x???A? E?p?@?r???????16??!$_xϠ??ҩ?C?-$r0?RD?E??? K????W?Q??pO?C[????RDuX?M?F?3?? ^}n?kz?hm?뛜?q? ??dE)      i   2   x?3?t?/??/N???".#N?????Լ??b??1?sFbr>????? ?\}      j   7   x?3????4202?54?5?@brs??1???!c??CƔ3?Mf@9??1z\\\ ?/?      k   r   x?3??J,H,???I?4202?54?5?@br?p:&'??e??Pa???Z?[???#N???<???A???E???q:'?f??6?t???M?%m?Y?Z\????喜??ɸ$c???? ??=I      l   *  x?m??r?0 ??5y?"	Ე?D,?V??????OߙNgʌ????́?tJ?a?M?cR9=?JF?9?6W{^??m???'?gF?[?(b?\?A???е(?J#}%???ח????P#s?@CjyӢg?)??k7?D<?Q?a??r?^1ӎ???-S???ȸ?o??w?8L?"5]??????iqn??WM(??7?gjw~<??L?????R?ۧ0?kF3?1??qO?򟀇?h??R?O?l????V]?)"9?/r]????¶?E?D??^?	?Q????$?d ?7??y?     