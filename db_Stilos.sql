PGDMP         9            
    z            Stilos    14.5    14.5 R    x           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            y           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            z           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            {           1262    16798    Stilos    DATABASE     d   CREATE DATABASE "Stilos" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE "Stilos";
                postgres    false            �            1259    16836    administrador    TABLE     �   CREATE TABLE public.administrador (
    id integer NOT NULL,
    fk_usuario integer NOT NULL,
    fk_permisos_usuario integer NOT NULL,
    "createdAt" date,
    "updatedAt" date
);
 !   DROP TABLE public.administrador;
       public         heap    postgres    false            �            1259    16839    carrito    TABLE     �   CREATE TABLE public.carrito (
    id integer NOT NULL,
    fk_cliente integer NOT NULL,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.carrito;
       public         heap    postgres    false            �            1259    16842    carrito_Detalle    TABLE     '  CREATE TABLE public."carrito_Detalle" (
    id integer NOT NULL,
    fk_id_carrito integer NOT NULL,
    fk_producto_id integer NOT NULL,
    cantidad integer,
    estado_compra character varying,
    fecha_compra date,
    precio_unitario numeric,
    "createdAt" date,
    "updatedAt" date
);
 %   DROP TABLE public."carrito_Detalle";
       public         heap    postgres    false            �            1259    16847    cliente    TABLE     �   CREATE TABLE public.cliente (
    id integer NOT NULL,
    fk_usuario integer NOT NULL,
    fk_permiso_usuario integer NOT NULL,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.cliente;
       public         heap    postgres    false            �            1259    16850    color_producto    TABLE     �   CREATE TABLE public.color_producto (
    id integer NOT NULL,
    color character varying,
    "createdAt" date,
    "updatedAt" date
);
 "   DROP TABLE public.color_producto;
       public         heap    postgres    false            �            1259    16855 	   domicilio    TABLE     F  CREATE TABLE public.domicilio (
    id integer NOT NULL,
    domicilio character varying,
    fk_persona integer NOT NULL,
    calle character varying,
    departamento character varying,
    piso character varying,
    "num_Casa" character varying,
    barrio character varying,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.domicilio;
       public         heap    postgres    false            �            1259    16860    genero    TABLE     �   CREATE TABLE public.genero (
    id integer NOT NULL,
    genero character varying,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.genero;
       public         heap    postgres    false            �            1259    16865    genero_producto    TABLE     �   CREATE TABLE public.genero_producto (
    id integer NOT NULL,
    genero character varying,
    "createdAt" date,
    "updatedAt" date
);
 #   DROP TABLE public.genero_producto;
       public         heap    postgres    false            �            1259    16870 	   localidad    TABLE     �   CREATE TABLE public.localidad (
    id integer NOT NULL,
    localidad character varying,
    fk_provincia integer,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.localidad;
       public         heap    postgres    false            �            1259    16875    marca_producto    TABLE     �   CREATE TABLE public.marca_producto (
    id integer NOT NULL,
    marca character varying,
    "createdAt" date,
    "updatedAt" date
);
 "   DROP TABLE public.marca_producto;
       public         heap    postgres    false            �            1259    16880    orden_de_compra    TABLE     �   CREATE TABLE public.orden_de_compra (
    id integer NOT NULL,
    fk_carrito_detalle integer NOT NULL,
    cantidad_producto integer,
    metodo_pago character varying,
    total_pagado numeric,
    "createdAt" date,
    "updatedAt" date
);
 #   DROP TABLE public.orden_de_compra;
       public         heap    postgres    false            �            1259    16885    permiso_usuario    TABLE     �   CREATE TABLE public.permiso_usuario (
    id integer NOT NULL,
    nivel_permiso character varying NOT NULL,
    "createdAt" date,
    "updatedAt" date
);
 #   DROP TABLE public.permiso_usuario;
       public         heap    postgres    false            �            1259    16799    personas    TABLE     �  CREATE TABLE public.personas (
    id integer NOT NULL,
    nombre_uno character varying(100) NOT NULL,
    nombre_dos character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    localidad integer NOT NULL,
    provincia integer NOT NULL,
    genero integer NOT NULL,
    telefono character varying(100) NOT NULL,
    "createdAt" date,
    "updatedAt" date,
    fk_usuario integer NOT NULL,
    "deletedAt" date
);
    DROP TABLE public.personas;
       public         heap    postgres    false            �            1259    16805    personas_id_persona_seq    SEQUENCE     �   CREATE SEQUENCE public.personas_id_persona_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.personas_id_persona_seq;
       public          postgres    false    209            |           0    0    personas_id_persona_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.personas_id_persona_seq OWNED BY public.personas.id;
          public          postgres    false    211            �            1259    16890    producto    TABLE     T  CREATE TABLE public.producto (
    id integer NOT NULL,
    existencia_producto integer,
    imagen_producto character varying,
    precio_unitario numeric,
    fk_talle integer,
    fk_color integer NOT NULL,
    fk_genero integer NOT NULL,
    fk_marca integer NOT NULL,
    fk_tipo integer,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.producto;
       public         heap    postgres    false            �            1259    16895 	   provincia    TABLE     �   CREATE TABLE public.provincia (
    id integer NOT NULL,
    provincia character varying,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.provincia;
       public         heap    postgres    false            �            1259    16900    talle_producto    TABLE     �   CREATE TABLE public.talle_producto (
    id integer NOT NULL,
    talle character varying,
    "createdAt" date,
    "updatedAt" date
);
 "   DROP TABLE public.talle_producto;
       public         heap    postgres    false            �            1259    16905    tipo_producto    TABLE     �   CREATE TABLE public.tipo_producto (
    id integer NOT NULL,
    tipo_producto character varying,
    "createdAt" date,
    "updatedAt" date
);
 !   DROP TABLE public.tipo_producto;
       public         heap    postgres    false            �            1259    16802    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    id integer NOT NULL,
    email character varying(250) NOT NULL,
    contrasena character varying(250) NOT NULL,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    16812    usuarios_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.usuarios_id_usuario_seq;
       public          postgres    false    210            }           0    0    usuarios_id_usuario_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.usuarios_id_usuario_seq OWNED BY public.usuarios.id;
          public          postgres    false    212            �           2604    16910    personas id    DEFAULT     r   ALTER TABLE ONLY public.personas ALTER COLUMN id SET DEFAULT nextval('public.personas_id_persona_seq'::regclass);
 :   ALTER TABLE public.personas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    209            �           2604    16911    usuarios id    DEFAULT     r   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_usuario_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    210            f          0    16836    administrador 
   TABLE DATA           f   COPY public.administrador (id, fk_usuario, fk_permisos_usuario, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    213   g       g          0    16839    carrito 
   TABLE DATA           K   COPY public.carrito (id, fk_cliente, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    214   1g       h          0    16842    carrito_Detalle 
   TABLE DATA           �   COPY public."carrito_Detalle" (id, fk_id_carrito, fk_producto_id, cantidad, estado_compra, fecha_compra, precio_unitario, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   Ng       i          0    16847    cliente 
   TABLE DATA           _   COPY public.cliente (id, fk_usuario, fk_permiso_usuario, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    216   kg       j          0    16850    color_producto 
   TABLE DATA           M   COPY public.color_producto (id, color, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    217   �g       k          0    16855 	   domicilio 
   TABLE DATA           �   COPY public.domicilio (id, domicilio, fk_persona, calle, departamento, piso, "num_Casa", barrio, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   	h       l          0    16860    genero 
   TABLE DATA           F   COPY public.genero (id, genero, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   &h       m          0    16865    genero_producto 
   TABLE DATA           O   COPY public.genero_producto (id, genero, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    220   lh       n          0    16870 	   localidad 
   TABLE DATA           Z   COPY public.localidad (id, localidad, fk_provincia, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221   �h       o          0    16875    marca_producto 
   TABLE DATA           M   COPY public.marca_producto (id, marca, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    222   �h       p          0    16880    orden_de_compra 
   TABLE DATA           �   COPY public.orden_de_compra (id, fk_carrito_detalle, cantidad_producto, metodo_pago, total_pagado, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    223   5i       q          0    16885    permiso_usuario 
   TABLE DATA           V   COPY public.permiso_usuario (id, nivel_permiso, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    224   Ri       b          0    16799    personas 
   TABLE DATA           �   COPY public.personas (id, nombre_uno, nombre_dos, apellido, localidad, provincia, genero, telefono, "createdAt", "updatedAt", fk_usuario, "deletedAt") FROM stdin;
    public          postgres    false    209   �i       r          0    16890    producto 
   TABLE DATA           �   COPY public.producto (id, existencia_producto, imagen_producto, precio_unitario, fk_talle, fk_color, fk_genero, fk_marca, fk_tipo, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    225   Wj       s          0    16895 	   provincia 
   TABLE DATA           L   COPY public.provincia (id, provincia, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    226   tj       t          0    16900    talle_producto 
   TABLE DATA           M   COPY public.talle_producto (id, talle, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    227   �j       u          0    16905    tipo_producto 
   TABLE DATA           T   COPY public.tipo_producto (id, tipo_producto, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    228   �j       c          0    16802    usuarios 
   TABLE DATA           S   COPY public.usuarios (id, email, contrasena, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    210   Zk       ~           0    0    personas_id_persona_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.personas_id_persona_seq', 13, true);
          public          postgres    false    211                       0    0    usuarios_id_usuario_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.usuarios_id_usuario_seq', 19, true);
          public          postgres    false    212            �           2606    16913     administrador administrador_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT administrador_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.administrador DROP CONSTRAINT administrador_pkey;
       public            postgres    false    213            �           2606    16915 $   carrito_Detalle carrito_Detalle_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."carrito_Detalle"
    ADD CONSTRAINT "carrito_Detalle_pkey" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public."carrito_Detalle" DROP CONSTRAINT "carrito_Detalle_pkey";
       public            postgres    false    215            �           2606    16917    carrito carrito_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.carrito
    ADD CONSTRAINT carrito_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.carrito DROP CONSTRAINT carrito_pkey;
       public            postgres    false    214            �           2606    16919    cliente cliente_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.cliente DROP CONSTRAINT cliente_pkey;
       public            postgres    false    216            �           2606    16921 "   color_producto color_producto_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.color_producto
    ADD CONSTRAINT color_producto_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.color_producto DROP CONSTRAINT color_producto_pkey;
       public            postgres    false    217            �           2606    16923    domicilio domicilio_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.domicilio
    ADD CONSTRAINT domicilio_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.domicilio DROP CONSTRAINT domicilio_pkey;
       public            postgres    false    218            �           2606    16925    genero genero_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.genero
    ADD CONSTRAINT genero_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.genero DROP CONSTRAINT genero_pkey;
       public            postgres    false    219            �           2606    16927 $   genero_producto genero_producto_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.genero_producto
    ADD CONSTRAINT genero_producto_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.genero_producto DROP CONSTRAINT genero_producto_pkey;
       public            postgres    false    220            �           2606    16929    localidad localidad_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.localidad
    ADD CONSTRAINT localidad_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.localidad DROP CONSTRAINT localidad_pkey;
       public            postgres    false    221            �           2606    16931 "   marca_producto marca_producto_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.marca_producto
    ADD CONSTRAINT marca_producto_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.marca_producto DROP CONSTRAINT marca_producto_pkey;
       public            postgres    false    222            �           2606    16933 $   orden_de_compra orden_de_compra_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.orden_de_compra
    ADD CONSTRAINT orden_de_compra_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.orden_de_compra DROP CONSTRAINT orden_de_compra_pkey;
       public            postgres    false    223            �           2606    16935 $   permiso_usuario permiso_usuario_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.permiso_usuario
    ADD CONSTRAINT permiso_usuario_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.permiso_usuario DROP CONSTRAINT permiso_usuario_pkey;
       public            postgres    false    224            �           2606    16811    personas pk_persona 
   CONSTRAINT     Q   ALTER TABLE ONLY public.personas
    ADD CONSTRAINT pk_persona PRIMARY KEY (id);
 =   ALTER TABLE ONLY public.personas DROP CONSTRAINT pk_persona;
       public            postgres    false    209            �           2606    16820    usuarios pk_usuario 
   CONSTRAINT     Q   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT pk_usuario PRIMARY KEY (id);
 =   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT pk_usuario;
       public            postgres    false    210            �           2606    16937    producto producto_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.producto DROP CONSTRAINT producto_pkey;
       public            postgres    false    225            �           2606    16939    provincia provincia_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.provincia
    ADD CONSTRAINT provincia_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.provincia DROP CONSTRAINT provincia_pkey;
       public            postgres    false    226            �           2606    16941 "   talle_producto talle_producto_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.talle_producto
    ADD CONSTRAINT talle_producto_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.talle_producto DROP CONSTRAINT talle_producto_pkey;
       public            postgres    false    227            �           2606    16943     tipo_producto tipo_producto_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.tipo_producto
    ADD CONSTRAINT tipo_producto_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.tipo_producto DROP CONSTRAINT tipo_producto_pkey;
       public            postgres    false    228            �           2606    16944 "   orden_de_compra fk_carrito_detalle    FK CONSTRAINT     �   ALTER TABLE ONLY public.orden_de_compra
    ADD CONSTRAINT fk_carrito_detalle FOREIGN KEY (fk_carrito_detalle) REFERENCES public."carrito_Detalle"(id);
 L   ALTER TABLE ONLY public.orden_de_compra DROP CONSTRAINT fk_carrito_detalle;
       public          postgres    false    3244    215    223            �           2606    16949    carrito fk_cliente    FK CONSTRAINT     �   ALTER TABLE ONLY public.carrito
    ADD CONSTRAINT fk_cliente FOREIGN KEY (fk_cliente) REFERENCES public.cliente(id) ON UPDATE CASCADE ON DELETE CASCADE;
 <   ALTER TABLE ONLY public.carrito DROP CONSTRAINT fk_cliente;
       public          postgres    false    216    214    3246            �           2606    16954    producto fk_color    FK CONSTRAINT     �   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT fk_color FOREIGN KEY (fk_color) REFERENCES public.color_producto(id) ON UPDATE CASCADE NOT VALID;
 ;   ALTER TABLE ONLY public.producto DROP CONSTRAINT fk_color;
       public          postgres    false    3248    225    217            �           2606    16959    producto fk_genero_producto    FK CONSTRAINT     �   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT fk_genero_producto FOREIGN KEY (fk_genero) REFERENCES public.genero_producto(id) ON UPDATE CASCADE NOT VALID;
 E   ALTER TABLE ONLY public.producto DROP CONSTRAINT fk_genero_producto;
       public          postgres    false    225    220    3254            �           2606    16964    carrito_Detalle fk_id_carrito    FK CONSTRAINT     �   ALTER TABLE ONLY public."carrito_Detalle"
    ADD CONSTRAINT fk_id_carrito FOREIGN KEY (fk_id_carrito) REFERENCES public.carrito(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 I   ALTER TABLE ONLY public."carrito_Detalle" DROP CONSTRAINT fk_id_carrito;
       public          postgres    false    215    214    3242            �           2606    16969    producto fk_marca    FK CONSTRAINT     �   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT fk_marca FOREIGN KEY (fk_marca) REFERENCES public.marca_producto(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 ;   ALTER TABLE ONLY public.producto DROP CONSTRAINT fk_marca;
       public          postgres    false    222    3258    225            �           2606    16974     administrador fk_permiso_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT fk_permiso_usuario FOREIGN KEY (fk_permisos_usuario) REFERENCES public.permiso_usuario(id) ON UPDATE CASCADE NOT VALID;
 J   ALTER TABLE ONLY public.administrador DROP CONSTRAINT fk_permiso_usuario;
       public          postgres    false    213    3262    224            �           2606    16979    cliente fk_permiso_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT fk_permiso_usuario FOREIGN KEY (fk_permiso_usuario) REFERENCES public.permiso_usuario(id) ON UPDATE CASCADE NOT VALID;
 D   ALTER TABLE ONLY public.cliente DROP CONSTRAINT fk_permiso_usuario;
       public          postgres    false    216    3262    224            �           2606    16984    domicilio fk_persona    FK CONSTRAINT     �   ALTER TABLE ONLY public.domicilio
    ADD CONSTRAINT fk_persona FOREIGN KEY (fk_persona) REFERENCES public.personas(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 >   ALTER TABLE ONLY public.domicilio DROP CONSTRAINT fk_persona;
       public          postgres    false    209    3236    218            �           2606    16989    carrito_Detalle fk_prodcuto_id    FK CONSTRAINT     �   ALTER TABLE ONLY public."carrito_Detalle"
    ADD CONSTRAINT fk_prodcuto_id FOREIGN KEY (fk_producto_id) REFERENCES public.producto(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 J   ALTER TABLE ONLY public."carrito_Detalle" DROP CONSTRAINT fk_prodcuto_id;
       public          postgres    false    225    215    3264            �           2606    16994    localidad fk_provincia    FK CONSTRAINT     �   ALTER TABLE ONLY public.localidad
    ADD CONSTRAINT fk_provincia FOREIGN KEY (fk_provincia) REFERENCES public.provincia(id) NOT VALID;
 @   ALTER TABLE ONLY public.localidad DROP CONSTRAINT fk_provincia;
       public          postgres    false    3266    221    226            �           2606    16999    producto fk_talle    FK CONSTRAINT     �   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT fk_talle FOREIGN KEY (fk_talle) REFERENCES public.talle_producto(id) ON UPDATE CASCADE NOT VALID;
 ;   ALTER TABLE ONLY public.producto DROP CONSTRAINT fk_talle;
       public          postgres    false    225    3268    227            �           2606    17004    producto fk_tipo    FK CONSTRAINT     �   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT fk_tipo FOREIGN KEY (fk_tipo) REFERENCES public.tipo_producto(id) ON UPDATE CASCADE NOT VALID;
 :   ALTER TABLE ONLY public.producto DROP CONSTRAINT fk_tipo;
       public          postgres    false    228    225    3270            �           2606    16831    personas fk_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.personas
    ADD CONSTRAINT fk_usuario FOREIGN KEY (fk_usuario) REFERENCES public.usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 =   ALTER TABLE ONLY public.personas DROP CONSTRAINT fk_usuario;
       public          postgres    false    209    210    3238            �           2606    17009    administrador fk_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT fk_usuario FOREIGN KEY (fk_usuario) REFERENCES public.usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 B   ALTER TABLE ONLY public.administrador DROP CONSTRAINT fk_usuario;
       public          postgres    false    3238    213    210            �           2606    17014    cliente fk_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT fk_usuario FOREIGN KEY (fk_usuario) REFERENCES public.usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 <   ALTER TABLE ONLY public.cliente DROP CONSTRAINT fk_usuario;
       public          postgres    false    210    3238    216            f      x������ � �      g      x������ � �      h      x������ � �      i      x������ � �      j   q   x�uν�0���.E��+���@T�2��B�>=�,�Y�Nw>ck��[!Yd(y���L'l5������@_ͬ�@A��ON��P_�k#���ʯ����������1G[�N�����B      k      x������ � �      l   6   x�3��/)��4202�54�5�@brq����e��R`��X�\��[E� w8�      m   9   x�3���,N��4202�54�5�@brq����e���P`��X�\��[E� �R�      n      x������ � �      o   S   x�3�-Vp�M-��N�4202�54�5�@br�p%f���7�I,K-��,�ġ3 1�$#���!�Sb^J>�=... �F$g      p      x������ � �      q   6   x�3�L��L�+I�4202�54�5�@brq&��f�e�%�d���P���� ���      b   �   x����
�0Dϓ�d7��<ڃ�^��h�X����i*ƃ ��29��&dq��2ǼI���إMl�+��r)�Fۘ�fI�>��'�G��W[o�PX���{��!�r$��j%�:�a*`|)5Fa�q�q�Jѭ4��W��lC�o!�ŭ�^�!c�F���~-�n�1O�X\      r      x������ � �      s      x������ � �      t   7   x�3���4202�54�5�@brs�1���!c��CƔ3�Mf@9��1z\\\ �/�      u   r   x�3�J,H,���I�4202�54�5�@br�p:&'��e��Pa��Z�[���#N���<���A���E���q:'�f�6�t���M�%m�Y�Z\����喜��ɸ$c���� ��=I      c   �   x�e��n�@@�5�l��/,K�[��\ZM70�\� ���M�&%q�����tL��t �y��Be�Z�!�5K�7��V�&�mO���&�-wd���A�/Ja�8�+�������e�@P���5!¦��k��L��\y�^$O����Qm��sR���@>��{���k��Ɗ�'D����/a�I����9Wh���i<̭�t��Φ|��
'���G��O��o!���Y�     