---
title: "Retaining Walls Designer"
description: "Modern web application for cantilever concrete retaining wall design and analysis, featuring parameter definition, dimensioning, reinforcement design, and interactive visualization."
featured_image: "/images/album_retain_walls/demo.png"
tags: ["structural-engineering", "design-tools", "retaining-walls", "python", "streamlit"]
---

## Welcome! 👋


During my early days in structural engineering, I developed a Cantilever Concrete Retaining Wall Designer to assist with the design and analysis of retaining walls using Python. Today, I'm excited to present its modern version as a web application, powered by Streamlit.

{{< demo-image 
  src="https://static.streamlit.io/badges/streamlit_badge_black_white.svg"
  alt="Streamlit App"
  width="200"
  link="https://retaining-wall.streamlit.app/"
>}}

**Software developed to streamline the design and detailing process of retaining walls. The program allows:**

## Features 🚀

- **Define the parameters**
- **Define the dimensions**
- **Design the reinforcement (moment)**
- **Visualization**



## Demo video

{{< iframe id="demo-video" src="https://github.com/user-attachments/assets/a9045c25-d973-45f4-b019-410f8ca80141" width="100%" height="480" >}}

## Test the App

{{< iframe id="test-app" src="https://retaining-wall.streamlit.app?embed=true&embed_options=show_footer" width="100%" height="480" >}}


## Installation 🖥️

To run the **app** locally:

1. Clone this repository:

   ```bash
    git clone https://github.com/felipecordero/retaining_wall.git
   ```

1. Navigate to the project directory:

   ```bash
    cd retaining_wall
   ```


3. Install the required dependencies:


   ```bash
    pip install -r requirements.txt
   ```

4. Launch the Streamlit app:


   ```bash
    streamlit run streamlit_app.py
   ```

streamlit run streamlit_app.py


## The PyQt5 App is also present! 🖥️

If you want to try the Desktop App:

1. Navigate to the project directory:

   ```bash
    cd retaining_wall
   ```


2. In the file requirements, uncomment the line:

   ```bash
    # PyQt5==5.15.11
    # PyQt5_sip==12.15.0
   ```

4. Install the required dependencies:

   ```bash
    pip install -r requirements.txt
   ```


5. Launch the Streamlit app:


   ```bash
    python contencion.py
   ```


## Contributing 🤝
I welcome contributions to enhance the Cantilever Concrete Retaining Wall Designer. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear and concise messages.
4. Submit a pull request detailing your changes.

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

A heartfelt thank you to the open-source community and the developers of [Streamlit](https://streamlit.io/) for providing the tools that made this project possible. 

### Gallery

{{< gallery dir="images/album_retain_walls" >}}
