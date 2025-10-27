# Telemetria de Maquinário Agrícola 🚜

Projeto de monitoramento em tempo real de tratores e colheitadeiras, incluindo localização, consumo de combustível e horas de operação.  

---

## 🔧 Tecnologias Utilizadas

- **Hardware:** ESP32, GPS, sensor de corrente, acelerômetro  
- **Conectividade:** 4G LTE ou LoRaWAN  
- **Backend:** Node.js, PostgreSQL, MQTT  
- **Dashboard:** React.js, Leaflet ou Mapbox, Chart.js/Recharts  
- **Automação:** Alertas de manutenção preventiva, excesso de velocidade e horas de operação  

---

## 📈 Funcionalidades

- Coleta de dados via ESP32 (GPS, combustível, horas de operação e acelerômetro)  
- Publicação de dados via MQTT para o backend  
- Armazenamento em banco PostgreSQL  
- Dashboard em tempo real com:
  - Mapas de rota
  - Gráficos de consumo e uso
  - Alertas automáticos  
- Monitoramento de velocidade e horas de operação  
- Rotas e histórico de telemetria  

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

