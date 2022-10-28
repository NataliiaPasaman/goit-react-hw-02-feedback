import React from "react";
import { Component } from "react";

import css from "components/FeedbackWidget/feedbackWidget.module.css";

/**Застосунок повинен відображати кількість зібраних відгуків для кожної категорії.
Застосунок не повинен зберігати статистику відгуків між різними сесіями (оновлення сторінки).
*/

export class FeedbackWidget extends Component {
    constructor() {
        super();
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
          };
    }

    render() {
        return (
            <div>
            <button type="button">{this.state.good}</button>
            <button type="button">{this.state.neutral}</button>
            <button type="button">{this.state.bad}</button>
            </div>
        );
    }
}

