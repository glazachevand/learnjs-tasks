function f() {
  try {
    alert('начало');
    return "result";
  } catch (e) {
    /// ...
  } finally {
    alert('очистка!');
  }
}

f(); // начало, очистка!