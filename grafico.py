import json
import re
from collections import Counter
import matplotlib.pyplot as plt
import seaborn as sns

with open('datos_scraping.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for item in data:
    titulo = item['title'].lower()                                          # Convierte a minúsculas
    titulo = re.sub(r'[\d.]+', '', titulo).strip()                          # Elimina números y puntos
    primera_palabra = titulo.split()[0] if titulo.split() else ""           # Obtiene la primera palabra
    item['title'] = primera_palabra                                         # Actualiza el título en el diccionario

# Contar la frecuencia de las palabras en los títulos
titles = [item['title'] for item in data if item.get('title')]
word_counts = Counter(" ".join(titles).split())
top_words = word_counts.most_common(10)
labels, counts = zip(*top_words)

plt.figure(figsize=(10, 6))
sns.set_palette("pastel") 
sns.set_style("whitegrid") 

bars = plt.bar(labels, counts, color=sns.color_palette("pastel"), edgecolor="grey")
plt.xlabel("Lenguajes", fontsize=12, fontweight='bold', color='grey')
plt.ylabel("Frecuencia", fontsize=12, fontweight='bold', color='grey')
plt.title("Lenguajes de Programación Más Fáciles de Aprender", fontsize=14, fontweight='bold', color='black')
plt.xticks(rotation=45, fontsize=10)

plt.show()