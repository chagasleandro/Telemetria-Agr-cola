# 🚜 Telemetria de Maquinário Agrícola

Monitoramento **em tempo real** de tratores e colheitadeiras, com coleta de dados de **localização GPS**, **consumo de combustível**, **horas de operação** e **alertas automáticos**.  
Um projeto que une **IoT, telemetria e análise de dados** para aumentar a eficiência e reduzir custos no agronegócio. 🌾  

---

## 💡 Visão Geral

O sistema foi desenvolvido para permitir o **acompanhamento remoto e inteligente** de maquinário agrícola, com base em dados de sensores e conectividade IoT.  
Ele fornece um **dashboard interativo** que exibe informações em tempo real e **alertas preditivos** de manutenção, operação e performance.

---

## ⚙️ Tecnologias Utilizadas

| Camada | Tecnologias |
|:--|:--|
| **Hardware** | ESP32, GPS, Sensor de Corrente, Acelerômetro |
| **Conectividade** | 4G LTE ou LoRaWAN |
| **Backend** | Node.js, PostgreSQL, MQTT |
| **Frontend (Dashboard)** | React.js, Leaflet / Mapbox, Chart.js / Recharts |
| **Automação** | Alertas de manutenção preventiva, excesso de velocidade e horas de operação |

---

## 📊 Funcionalidades Principais

✅ Coleta de dados via ESP32 (GPS, combustível, horas de operação e aceleração)  
✅ Envio de dados via protocolo MQTT para o backend  
✅ Armazenamento estruturado em PostgreSQL  
✅ Dashboard interativo com:
- Mapa de rotas e localização atual  
- Gráficos de consumo e uso  
- Histórico de telemetria  
- Alertas automáticos em tempo real  

---

## 🗂 Estrutura do Projeto
telemetria-agricola/
<br/>├─ backend/ # API Node.js e conexão MQTT
<br/>├─ frontend-dashboard/ # Dashboard React.js
<br/>├─ esp32/ # Código MicroPython ESP32
<br/>├─ README.md
<br/>└─ .gitignore
---

## 🚀 Como Rodar

1. **Backend**
```bash
cd backend
npm install
npm start

cd frontend-dashboard
npm install
npm start

🔹 Firmware ESP32

Configure a conexão Wi-Fi e o broker MQTT no código-fonte antes do upload.

📈 Resultados Esperados

Aumento da eficiência operacional 🌱

Redução de custos com manutenção 🔧

Análise de desempenho e uso dos equipamentos 📊

Base para expansão em sistemas de agricultura inteligente (Smart Farming)

👨‍💻 Autor

Leandro Chagas
Especialista em Suporte Técnico, IoT e Monitoramento
🔗 LinkedIn: https://www.linkedin.com/in/leandro-chagas-/

💻 GitHub: 

