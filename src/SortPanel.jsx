import React from 'react';

const SortPanel = ({ isChecked, onToggleSort }) => {
    return (
        <div className="form-check mt-2">
            <input 
                className="form-check-input" 
                type="checkbox" 
                id="sortCheckbox"
                checked={isChecked}
                onChange={(e) => onToggleSort(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="sortCheckbox">
                Сортувати за назвою (A-Z)
            </label>
        </div>
    );
};

export default SortPanel;