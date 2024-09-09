import Colors from '~Style/Colors';

export type CounterProps = {
  /*
   * Current (active) count
   */
  current: number;

  /*
   * Total count
   */
  total: number;

  /**
   * Counter variant
   */
  variant?: 'textual' | 'slider';
  /**
   * Active slider color for slider variant
   *
   */
  color?: keyof typeof Colors;
};
