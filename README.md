# Web Scraping y Análisis de los Lenguajes de Programación Web más fáciles de aprender
Este proyecto realiza scraping de páginas web para extraer títulos de artículos, identificar palabras clave dentro de esos títulos, y analizar la frecuencia de esas palabras clave. Los resultados se utilizan para generar un ranking de los lenguajes de programación web más fáciles de aprender, y los representa en una visualización gráfica.

## Tabla de Contenidos
1. [Descripción General](#descripción)
2. [Requisitos](#requisitos)
3. [Instalacion](#instalacion)
4. [Uso](#uso)
5. [Archivos](#archivos)
6. [Resultados](#resultados)

## 📄 Descripción General
El propósito de este proyecto es realizar un análisis de las palabras clave en títulos de artículos obtenidos de distintas páginas web.
```bash
# URL de las páginas web utilizadas:
'https://www.guvi.in/blog/easiest-programming-languages-to-hardest-ranked/#:~:text=HTML%2C%20CSS%2C%20PHP%2C%20JavaScript good%20availability%20of%20learning%20opportunities.',
'https://www.zegocloud.com/blog/easiest-programming-language-to-learn', 
'https://www.appacademy.io/blog/easy-programming-langauges-to-learn',
'https://www.forbes.com/advisor/education/it-and-tech/easiest-programming-language-to-learn/'

```
La métrica principal de análisis es la frecuencia de aparición de palabras en los títulos, con el objetivo de identificar cuáles son las más populares. La visualización generada es un gráfico de barras que muestra estas palabras en orden descendente de frecuencia. 

## 🔔 Requisitos
- Node.js
- Python 3
- Paquetes de Python: seaborn, matplotlib
- Playwright para Node.js

## 🚀 Instalación 
```bash
# 1. Clonar el repositorio:
git clone <https://github.com/priscilapenela/Proyecto_WS.git>
cd <Proyecto_WS>

# 2. Instala los paquetes de Node.js necesarios:
npm install playwright

# 3. Instala los paquetes de Python necesarios:
pip install seaborn matplotlib

```
## 💡 Uso
1. **Scraping de datos**: Ejecuta el archivo de scraping en Node.js para extraer los títulos y guardarlos en un archivo JSON:

```bash
node node index.mjs

```
2. **Análisis y visualización**: Ejecuta el archivo Python para procesar los datos, generar el ranking de palabras y visualizar los resultados:

```bash
python grafico.py

```
## 📁 Archivos
- **scrape.js**: Contiene el script de scraping en Node.js.
- **grafico.py**: Script en Python que lee los datos JSON generados, analiza la frecuencia de palabras clave y crea un gráfico.
- **datos_scraping.json**: Archivo JSON donde se almacenan los datos extraídos del scraping.

## 📊 Resultados
El gráfico de barras se genera con **seaborn** y **matplotlib**, y muestra los lenguajes de programación web más frecuentes en los títulos analizados.
![Resultados](https://github.com/priscilapenela/Proyecto_WS/blob/master/images/Resultados.png?raw=true)
