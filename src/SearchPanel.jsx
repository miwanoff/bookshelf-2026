import { useState } from 'react';

const SearchPanel = (props) => {
  const [term, setTerm] = useState("");

  const onUpdateSearch = (e) => {
    const value = e.target.value;
    setTerm(value); // Оновлюємо внутрішній стан компонента
    props.onUpdateSearch(value); // Передаємо значення в батьківський компонент (App)
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Пошук книг"
      value={term} // Зв'язуємо значення інпуту зі станом
      onChange={onUpdateSearch} // Викликаємо функцію при введенні тексту
    />
  );
};

export default SearchPanel;
