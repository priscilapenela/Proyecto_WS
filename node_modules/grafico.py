import json
import re
from collections import Counter
import matplotlib.pyplot as plt
import seaborn as sns

# Leer datos del archivo JSON generado por Node.js
with open('datos_scraping.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Procesar títulos para quedarnos solo con la primera palabra, en minúsculas y sin números ni puntos
for item in data:
    titulo = item['title'].lower()
    titulo = re.sub(r'[\d.]+', '', titulo).strip()
    primera_palabra = titulo.split()[0] if titulo.split() else ""
    item['title'] = primera_palabra

# Contar la frecuencia de las palabras en los títulos
titles = [item['title'] for item in data if item.get('title')]
word_counts = Counter(" ".join(titles).split())
top_words = word_counts.most_common(10)
labels, counts = zip(*top_words)

# Estilo "cute" para el gráfico
plt.figure(figsize=(10, 6))
sns.set_palette("pastel")  # Cambia a tonos pastel
sns.set_style("whitegrid") # Fondo con cuadrícula suave

# Crear gráfico de barras con bordes redondeados
bars = plt.bar(labels, counts, color=sns.color_palette("pastel"), edgecolor="grey")
plt.xlabel("Lenguajes", fontsize=12, fontweight='bold', color='grey')
plt.ylabel("Frecuencia", fontsize=12, fontweight='bold', color='grey')
plt.title("Lenguajes de Programación Más Fáciles de Aprender", fontsize=14, fontweight='bold', color='black')
plt.xticks(rotation=45, fontsize=10)

plt.show()