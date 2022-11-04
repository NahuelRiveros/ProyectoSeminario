PGDMP         (            
    z            Stilos    14.5    14.5 U    {           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            |           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            }           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ~           1262    16952    Stilos    DATABASE     h   CREATE DATABASE "Stilos" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Argentina.1252';
    DROP DATABASE "Stilos";
                postgres    false            �            1259    17032    administrador    TABLE     �   CREATE TABLE public.administrador (
    id integer NOT NULL,
    fk_usuario integer NOT NULL,
    fk_permisos_usuario integer NOT NULL,
    "createdAt" date,
    "updatedAt" date
);
 !   DROP TABLE public.administrador;
       public         heap    postgres    false            �            1259    17069    carrito    TABLE     �   CREATE TABLE public.carrito (
    id integer NOT NULL,
    fk_cliente integer NOT NULL,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.carrito;
       public         heap    postgres    false            �            1259    17079    carrito_Detalle    TABLE     '  CREATE TABLE public."carrito_Detalle" (
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
       public         heap    postgres    false            �            1259    17042    cliente    TABLE     �   CREATE TABLE public.cliente (
    id integer NOT NULL,
    fk_usuario integer NOT NULL,
    fk_permiso_usuario integer NOT NULL,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.cliente;
       public         heap    postgres    false            �            1259    17122    color_producto    TABLE     �   CREATE TABLE public.color_producto (
    id integer NOT NULL,
    color character varying,
    "createdAt" date,
    "updatedAt" date
);
 "   DROP TABLE public.color_producto;
       public         heap    postgres    false            �            1259    17015 	   domicilio    TABLE     F  CREATE TABLE public.domicilio (
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
       public         heap    postgres    false            �            1259    16974    genero    TABLE     �   CREATE TABLE public.genero (
    id integer NOT NULL,
    genero character varying,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.genero;
       public         heap    postgres    false            �            1259    17136    genero_producto    TABLE     �   CREATE TABLE public.genero_producto (
    id integer NOT NULL,
    genero character varying,
    "createdAt" date,
    "updatedAt" date
);
 #   DROP TABLE public.genero_producto;
       public         heap    postgres    false            �            1259    16988 	   localidad    TABLE     �   CREATE TABLE public.localidad (
    id integer NOT NULL,
    localidad character varying,
    fk_provincia integer,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.localidad;
       public         heap    postgres    false            �            1259    17129    marca_producto    TABLE     �   CREATE TABLE public.marca_producto (
    id integer NOT NULL,
    marca character varying,
    "createdAt" date,
    "updatedAt" date
);
 "   DROP TABLE public.marca_producto;
       public         heap    postgres    false            �            1259    17091    orden_de_compra    TABLE     �   CREATE TABLE public.orden_de_compra (
    id integer NOT NULL,
    fk_carrito_detalle integer NOT NULL,
    cantidad_producto integer,
    metodo_pago character varying,
    total_pagado numeric,
    "createdAt" date,
    "updatedAt" date
);
 #   DROP TABLE public.orden_de_compra;
       public         heap    postgres    false            �            1259    17052    permiso_usuario    TABLE     �   CREATE TABLE public.permiso_usuario (
    id integer NOT NULL,
    nivel_permiso character varying NOT NULL,
    "createdAt" date,
    "updatedAt" date
);
 #   DROP TABLE public.permiso_usuario;
       public         heap    postgres    false            �            1259    16953    personas    TABLE     �  CREATE TABLE public.personas (
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
       public         heap    postgres    false            �            1259    16956    personas_id_persona_seq    SEQUENCE     �   CREATE SEQUENCE public.personas_id_persona_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.personas_id_persona_seq;
       public          postgres    false    209                       0    0    personas_id_persona_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.personas_id_persona_seq OWNED BY public.personas.id;
          public          postgres    false    210            �            1259    17103    producto    TABLE     T  CREATE TABLE public.producto (
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
       public         heap    postgres    false            �            1259    16981 	   provincia    TABLE     �   CREATE TABLE public.provincia (
    id integer NOT NULL,
    provincia character varying,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.provincia;
       public         heap    postgres    false            �            1259    17115    talle_producto    TABLE     �   CREATE TABLE public.talle_producto (
    id integer NOT NULL,
    talle character varying,
    "createdAt" date,
    "updatedAt" date
);
 "   DROP TABLE public.talle_producto;
       public         heap    postgres    false            �            1259    17164    tipo_producto    TABLE     �   CREATE TABLE public.tipo_producto (
    id integer NOT NULL,
    tipo_producto character varying,
    "createdAt" date,
    "updatedAt" date
);
 !   DROP TABLE public.tipo_producto;
       public         heap    postgres    false            �            1259    16957    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    id integer NOT NULL,
    email character varying(250) NOT NULL,
    contrasena character varying(250) NOT NULL,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    16962    usuarios_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.usuarios_id_usuario_seq;
       public          postgres    false    211            �           0    0    usuarios_id_usuario_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.usuarios_id_usuario_seq OWNED BY public.usuarios.id;
          public          postgres    false    212            �           2604    16963    personas id    DEFAULT     r   ALTER TABLE ONLY public.personas ALTER COLUMN id SET DEFAULT nextval('public.personas_id_persona_seq'::regclass);
 :   ALTER TABLE public.personas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209            �           2604    16964    usuarios id    DEFAULT     r   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_usuario_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211            m          0    17032    administrador 
   TABLE DATA           f   COPY public.administrador (id, fk_usuario, fk_permisos_usuario, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    217   }k       p          0    17069    carrito 
   TABLE DATA           K   COPY public.carrito (id, fk_cliente, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    220   �k       q          0    17079    carrito_Detalle 
   TABLE DATA           �   COPY public."carrito_Detalle" (id, fk_id_carrito, fk_producto_id, cantidad, estado_compra, fecha_compra, precio_unitario, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221   �k       n          0    17042    cliente 
   TABLE DATA           _   COPY public.cliente (id, fk_usuario, fk_permiso_usuario, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   �k       u          0    17122    color_producto 
   TABLE DATA           M   COPY public.color_producto (id, color, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    225   �k       l          0    17015 	   domicilio 
   TABLE DATA           �   COPY public.domicilio (id, domicilio, fk_persona, calle, departamento, piso, "num_Casa", barrio, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    216   l       i          0    16974    genero 
   TABLE DATA           F   COPY public.genero (id, genero, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    213   +l       w          0    17136    genero_producto 
   TABLE DATA           O   COPY public.genero_producto (id, genero, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    227   Hl       k          0    16988 	   localidad 
   TABLE DATA           Z   COPY public.localidad (id, localidad, fk_provincia, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   el       v          0    17129    marca_producto 
   TABLE DATA           M   COPY public.marca_producto (id, marca, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    226   �l       r          0    17091    orden_de_compra 
   TABLE DATA           �   COPY public.orden_de_compra (id, fk_carrito_detalle, cantidad_producto, metodo_pago, total_pagado, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    222   �l       o          0    17052    permiso_usuario 
   TABLE DATA           V   COPY public.permiso_usuario (id, nivel_permiso, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   �l       e          0    16953    personas 
   TABLE DATA           �   COPY public.personas (id, nombre_uno, nombre_dos, apellido, fk_localidad, fk_provincia, fk_genero, telefono, "createdAt", "updatedAt", fk_usuario, "deletedAt") FROM stdin;
    public          postgres    false    209   �l       s          0    17103    producto 
   TABLE DATA           �   COPY public.producto (id, existencia_producto, imagen_producto, precio_unitario, fk_talle, fk_color, fk_genero, fk_marca, fk_tipo, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    223   �m       j          0    16981 	   provincia 
   TABLE DATA           L   COPY public.provincia (id, provincia, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    214   �m       t          0    17115    talle_producto 
   TABLE DATA           M   COPY public.talle_producto (id, talle, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    224   �m       x          0    17164    tipo_producto 
   TABLE DATA           T   COPY public.tipo_producto (id, tipo_producto, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    228   �m       g          0    16957    usuarios 
   TABLE DATA           S   COPY public.usuarios (id, email, contrasena, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    211   n       �           0    0    personas_id_persona_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.personas_id_persona_seq', 13, true);
          public          postgres    false    210            �           0    0    usuarios_id_usuario_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.usuarios_id_usuario_seq', 19, true);
          public          postgres    false    212            �           2606    17036     administrador administrador_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT administrador_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.administrador DROP CONSTRAINT administrador_pkey;
       public            postgres    false    217            �           2606    17085 $   carrito_Detalle carrito_Detalle_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."carrito_Detalle"
    ADD CONSTRAINT "carrito_Detalle_pkey" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public."carrito_Detalle" DROP CONSTRAINT "carrito_Detalle_pkey";
       public            postgres    false    221            �           2606    17073    carrito carrito_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.carrito
    ADD CONSTRAINT carrito_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.carrito DROP CONSTRAINT carrito_pkey;
       public            postgres    false    220            �           2606    17046    cliente cliente_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.cliente DROP CONSTRAINT cliente_pkey;
       public            postgres    false    218            �           2606    17128 "   color_producto color_producto_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.color_producto
    ADD CONSTRAINT color_producto_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.color_producto DROP CONSTRAINT color_producto_pkey;
       public            postgres    false    225            �           2606    17021    domicilio domicilio_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.domicilio
    ADD CONSTRAINT domicilio_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.domicilio DROP CONSTRAINT domicilio_pkey;
       public            postgres    false    216            �           2606    16980    genero genero_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.genero
    ADD CONSTRAINT genero_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.genero DROP CONSTRAINT genero_pkey;
       public            postgres    false    213            �           2606    17142 $   genero_producto genero_producto_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.genero_producto
    ADD CONSTRAINT genero_producto_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.genero_producto DROP CONSTRAINT genero_producto_pkey;
       public            postgres    false    227            �           2606    16994    localidad localidad_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.localidad
    ADD CONSTRAINT localidad_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.localidad DROP CONSTRAINT localidad_pkey;
       public            postgres    false    215            �           2606    17135 "   marca_producto marca_producto_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.marca_producto
    ADD CONSTRAINT marca_producto_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.marca_producto DROP CONSTRAINT marca_producto_pkey;
       public            postgres    false    226            �           2606    17097 $   orden_de_compra orden_de_compra_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.orden_de_compra
    ADD CONSTRAINT orden_de_compra_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.orden_de_compra DROP CONSTRAINT orden_de_compra_pkey;
       public            postgres    false    222            �           2606    17058 $   permiso_usuario permiso_usuario_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.permiso_usuario
    ADD CONSTRAINT permiso_usuario_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.permiso_usuario DROP CONSTRAINT permiso_usuario_pkey;
       public            postgres    false    219            �           2606    16966    personas pk_persona 
   CONSTRAINT     Q   ALTER TABLE ONLY public.personas
    ADD CONSTRAINT pk_persona PRIMARY KEY (id);
 =   ALTER TABLE ONLY public.personas DROP CONSTRAINT pk_persona;
       public            postgres    false    209            �           2606    16968    usuarios pk_usuario 
   CONSTRAINT     Q   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT pk_usuario PRIMARY KEY (id);
 =   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT pk_usuario;
       public            postgres    false    211            �           2606    17109    producto producto_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.producto DROP CONSTRAINT producto_pkey;
       public            postgres    false    223            �           2606    16987    provincia provincia_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.provincia
    ADD CONSTRAINT provincia_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.provincia DROP CONSTRAINT provincia_pkey;
       public            postgres    false    214            �           2606    17121 "   talle_producto talle_producto_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.talle_producto
    ADD CONSTRAINT talle_producto_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.talle_producto DROP CONSTRAINT talle_producto_pkey;
       public            postgres    false    224            �           2606    17170     tipo_producto tipo_producto_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.tipo_producto
    ADD CONSTRAINT tipo_producto_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.tipo_producto DROP CONSTRAINT tipo_producto_pkey;
       public            postgres    false    228            �           2606    17098 "   orden_de_compra fk_carrito_detalle    FK CONSTRAINT     �   ALTER TABLE ONLY public.orden_de_compra
    ADD CONSTRAINT fk_carrito_detalle FOREIGN KEY (fk_carrito_detalle) REFERENCES public."carrito_Detalle"(id);
 L   ALTER TABLE ONLY public.orden_de_compra DROP CONSTRAINT fk_carrito_detalle;
       public          postgres    false    222    3256    221            �           2606    17074    carrito fk_cliente    FK CONSTRAINT     �   ALTER TABLE ONLY public.carrito
    ADD CONSTRAINT fk_cliente FOREIGN KEY (fk_cliente) REFERENCES public.cliente(id) ON UPDATE CASCADE ON DELETE CASCADE;
 <   ALTER TABLE ONLY public.carrito DROP CONSTRAINT fk_cliente;
       public          postgres    false    218    3250    220            �           2606    17154    producto fk_color    FK CONSTRAINT     �   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT fk_color FOREIGN KEY (fk_color) REFERENCES public.color_producto(id) ON UPDATE CASCADE NOT VALID;
 ;   ALTER TABLE ONLY public.producto DROP CONSTRAINT fk_color;
       public          postgres    false    225    223    3264            �           2606    17000    personas fk_genero    FK CONSTRAINT     ~   ALTER TABLE ONLY public.personas
    ADD CONSTRAINT fk_genero FOREIGN KEY (fk_genero) REFERENCES public.genero(id) NOT VALID;
 <   ALTER TABLE ONLY public.personas DROP CONSTRAINT fk_genero;
       public          postgres    false    3240    213    209            �           2606    17149    producto fk_genero_producto    FK CONSTRAINT     �   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT fk_genero_producto FOREIGN KEY (fk_genero) REFERENCES public.genero_producto(id) ON UPDATE CASCADE NOT VALID;
 E   ALTER TABLE ONLY public.producto DROP CONSTRAINT fk_genero_producto;
       public          postgres    false    227    3268    223            �           2606    17086    carrito_Detalle fk_id_carrito    FK CONSTRAINT     �   ALTER TABLE ONLY public."carrito_Detalle"
    ADD CONSTRAINT fk_id_carrito FOREIGN KEY (fk_id_carrito) REFERENCES public.carrito(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 I   ALTER TABLE ONLY public."carrito_Detalle" DROP CONSTRAINT fk_id_carrito;
       public          postgres    false    3254    220    221            �           2606    17005    personas fk_localidad    FK CONSTRAINT     �   ALTER TABLE ONLY public.personas
    ADD CONSTRAINT fk_localidad FOREIGN KEY (fk_localidad) REFERENCES public.localidad(id) NOT VALID;
 ?   ALTER TABLE ONLY public.personas DROP CONSTRAINT fk_localidad;
       public          postgres    false    209    215    3244            �           2606    17159    producto fk_marca    FK CONSTRAINT     �   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT fk_marca FOREIGN KEY (fk_marca) REFERENCES public.marca_producto(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 ;   ALTER TABLE ONLY public.producto DROP CONSTRAINT fk_marca;
       public          postgres    false    226    3266    223            �           2606    17059     administrador fk_permiso_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT fk_permiso_usuario FOREIGN KEY (fk_permisos_usuario) REFERENCES public.permiso_usuario(id) ON UPDATE CASCADE NOT VALID;
 J   ALTER TABLE ONLY public.administrador DROP CONSTRAINT fk_permiso_usuario;
       public          postgres    false    219    3252    217            �           2606    17064    cliente fk_permiso_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT fk_permiso_usuario FOREIGN KEY (fk_permiso_usuario) REFERENCES public.permiso_usuario(id) ON UPDATE CASCADE NOT VALID;
 D   ALTER TABLE ONLY public.cliente DROP CONSTRAINT fk_permiso_usuario;
       public          postgres    false    219    218    3252            �           2606    17027    domicilio fk_persona    FK CONSTRAINT     �   ALTER TABLE ONLY public.domicilio
    ADD CONSTRAINT fk_persona FOREIGN KEY (fk_persona) REFERENCES public.personas(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 >   ALTER TABLE ONLY public.domicilio DROP CONSTRAINT fk_persona;
       public          postgres    false    3236    209    216            �           2606    17110    carrito_Detalle fk_prodcuto_id    FK CONSTRAINT     �   ALTER TABLE ONLY public."carrito_Detalle"
    ADD CONSTRAINT fk_prodcuto_id FOREIGN KEY (fk_producto_id) REFERENCES public.producto(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 J   ALTER TABLE ONLY public."carrito_Detalle" DROP CONSTRAINT fk_prodcuto_id;
       public          postgres    false    221    3260    223            �           2606    16995    localidad fk_provincia    FK CONSTRAINT     �   ALTER TABLE ONLY public.localidad
    ADD CONSTRAINT fk_provincia FOREIGN KEY (fk_provincia) REFERENCES public.provincia(id) NOT VALID;
 @   ALTER TABLE ONLY public.localidad DROP CONSTRAINT fk_provincia;
       public          postgres    false    3242    214    215            �           2606    17010    personas fk_provincia    FK CONSTRAINT     �   ALTER TABLE ONLY public.personas
    ADD CONSTRAINT fk_provincia FOREIGN KEY (fk_provincia) REFERENCES public.provincia(id) NOT VALID;
 ?   ALTER TABLE ONLY public.personas DROP CONSTRAINT fk_provincia;
       public          postgres    false    214    209    3242            �           2606    17144    producto fk_talle    FK CONSTRAINT     �   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT fk_talle FOREIGN KEY (fk_talle) REFERENCES public.talle_producto(id) ON UPDATE CASCADE NOT VALID;
 ;   ALTER TABLE ONLY public.producto DROP CONSTRAINT fk_talle;
       public          postgres    false    3262    223    224            �           2606    17171    producto fk_tipo    FK CONSTRAINT     �   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT fk_tipo FOREIGN KEY (fk_tipo) REFERENCES public.tipo_producto(id) ON UPDATE CASCADE NOT VALID;
 :   ALTER TABLE ONLY public.producto DROP CONSTRAINT fk_tipo;
       public          postgres    false    228    223    3270            �           2606    16969    personas fk_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.personas
    ADD CONSTRAINT fk_usuario FOREIGN KEY (fk_usuario) REFERENCES public.usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 =   ALTER TABLE ONLY public.personas DROP CONSTRAINT fk_usuario;
       public          postgres    false    211    3238    209            �           2606    17037    administrador fk_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT fk_usuario FOREIGN KEY (fk_usuario) REFERENCES public.usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 B   ALTER TABLE ONLY public.administrador DROP CONSTRAINT fk_usuario;
       public          postgres    false    211    3238    217            �           2606    17047    cliente fk_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT fk_usuario FOREIGN KEY (fk_usuario) REFERENCES public.usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;
 <   ALTER TABLE ONLY public.cliente DROP CONSTRAINT fk_usuario;
       public          postgres    false    218    211    3238            m      x������ � �      p      x������ � �      q      x������ � �      n      x������ � �      u      x������ � �      l      x������ � �      i      x������ � �      w      x������ � �      k      x������ � �      v      x������ � �      r      x������ � �      o      x������ � �      e   �   x�u�=
�0�g�.)�l� ]3t�"���l���v(q A?<�x�B'�����{Jp<�wKJ�[4h	-#sC� Ւ��w�$��#,q� �8^
!qX�<�גn��0#��YEqe�^�Ν���.E��m؝�;�t��e�ô��(�N&RJ�_�R?��W)      s      x������ � �      j      x������ � �      t      x������ � �      x      x������ � �      g      x�u�;s�@��~�-�~��.@VL1r�4+"��
*��4Ʉ���3i�1�w�)���R�i�Ĭ���#	����z;�:�%����c�g���=]΢d�.�������W��@�$ $�t������D*����;�ϐ:�M�9;�l��=io:�n��KM�wtᯒ��=�	�G�K�i^R��l��X�4�;v�SZL��]d����lz��LR+�d��\<���8�G��C�_����V�#�����Oǹ�QE������喸A]�^a�}�<���x_     