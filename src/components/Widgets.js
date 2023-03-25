import React from "react";
import WidgetsBroadсasts from "./WidgetsBroadсasts";
import WidgetsCurrency from "./WidgetsCurrency";
import WidgetsDate from "./WidgetsDate";
import WidgetsMap from "./WidgetsMap";
import WidgetsTV from "./WidgetsTV";
import WidgetsVisited from "./WidgetsVisited";
import WidgetsWeather from "./WidgetsWeather";

// Компонент выводящий разные виджеты

function WidgetDate( {type, data} ) {

    // Здесь проверка на требумый виджет
    // А так же передача 'data' в требуемый виджет

    return 'Рендеринг конкретного виджета + передача data этому виджету';
}

export default WidgetDate;
