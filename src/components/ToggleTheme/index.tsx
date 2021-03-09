import { useContext, useEffect, useState } from 'react';
import { BlogThemeContext } from '../../contexts/BlogThemeContext';
import * as Styled from './styles';

export const ToggleTheme = () => {
  const { setTheme } = useContext(BlogThemeContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    const newTheme = JSON.parse(localTheme);

    if (newTheme.name === 'inverted') {
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    setTheme(checked ? 'inverted' : 'default');
  }, [checked, setTheme]);

  const handleChange = () => {
    setChecked((s) => !s);
    setTheme(checked ? 'inverted' : 'default');
  };

  return (
    <Styled.Wrapper>
      <Styled.Label>
        Toggle light and dark modes
        <Styled.Input
          type="checkbox"
          value="Dark mode active"
          onChange={handleChange}
          checked={checked}
        />
        <Styled.Slider></Styled.Slider>
      </Styled.Label>
    </Styled.Wrapper>
  );
};
