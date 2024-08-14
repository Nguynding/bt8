import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, loadUserFromStorage } from './src/features/store';
import { TodoApp } from './src/features/todos/TodoApp';
import { LoginComponent } from './src/features/Auth/LoginComponent';
import { ProfileComponent } from './src/features/Auth/ProfileComponent';

const Main = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <ProfileComponent />
          <TodoApp />
        </>
      ) : (
        <LoginComponent />
      )}
    </View>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default App;