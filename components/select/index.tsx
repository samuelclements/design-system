import React from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { SelectContent, SelectIcon, SelectLabel, SelectScrollButton, SelectSeparator, SelectTrigger, SelectViewport, SelectItem, SelectItemIndicator } from './select.css';

const SelectComponent = () => (
  <Select.Root>
    <Select.Trigger aria-label="Food" className={SelectTrigger}>
      <Select.Value placeholder="Select a fruit…" />
      <Select.Icon className={SelectIcon}>
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className={SelectContent}>
        <Select.ScrollUpButton className={SelectScrollButton}>
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className={SelectViewport}>
          <Select.Group>
            <Select.Label className={SelectLabel}>Fruits</Select.Label>
            <SelectItemComponent value="apple">Apple</SelectItemComponent>
            <SelectItemComponent value="banana">Banana</SelectItemComponent>
            <SelectItemComponent value="blueberry">Blueberry</SelectItemComponent>
            <SelectItemComponent value="grapes">Grapes</SelectItemComponent>
            <SelectItemComponent value="pineapple">Pineapple</SelectItemComponent>
          </Select.Group>

          <Select.Separator className={SelectSeparator} />

          <Select.Group>
            <Select.Label className={SelectLabel}>Vegetables</Select.Label>
            <SelectItemComponent value="aubergine">Aubergine</SelectItemComponent>
            <SelectItemComponent value="broccoli">Broccoli</SelectItemComponent>
            <SelectItemComponent value="carrot" disabled>
              Carrot
            </SelectItemComponent>
            <SelectItemComponent value="courgette">Courgette</SelectItemComponent>
            <SelectItemComponent value="leek">Leek</SelectItemComponent>
          </Select.Group>

          <Select.Separator className={SelectSeparator}  />

          <Select.Group>
            <Select.Label className={SelectLabel}>Meat</Select.Label>
            <SelectItemComponent value="beef">Beef</SelectItemComponent>
            <SelectItemComponent value="chicken">Chicken</SelectItemComponent>
            <SelectItemComponent value="lamb">Lamb</SelectItemComponent>
            <SelectItemComponent value="pork">Pork</SelectItemComponent>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className={SelectScrollButton}>
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectItemComponent = React.forwardRef<
React.ElementRef<typeof Select.Item>,
React.ComponentPropsWithoutRef<typeof Select.Item>
>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Select.Item
        {...props}
        ref={forwardedRef}
        className={SelectItem}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className={SelectItemIndicator}>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default SelectComponent;
