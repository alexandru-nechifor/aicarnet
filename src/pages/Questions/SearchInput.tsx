import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { useDispatch } from 'react-redux';
import { useSearchSelector } from '../../customHooks/useSearchSelector';
import { setSearch } from '../../store/quizQuestionsSlice';

const SearchInput = () => {
  const search = useSearchSelector();
  const dispatch = useDispatch();

  return (
    <TextInput
      onChange={(event) => {
        dispatch(setSearch(event.currentTarget.value));
      }}
      value={search}
      placeholder="Caută întrebarea"
      sx={{ width: '400px' }}
      icon={<IconSearch size={14} />}
    ></TextInput>
  );
};

export default SearchInput;
